"""
Here are some use cases:
python main.py --config config/all.yaml --experiment experiment_8x1 --signature demo1 --target data/demo1.png
"""
import pydiffvg
import torch
import cv2
import matplotlib.pyplot as plt
import random
import argparse
import math
import errno
from tqdm import tqdm
from torch.optim.lr_scheduler import CosineAnnealingLR, LambdaLR
from torch.nn.functional import adaptive_avg_pool2d
import warnings
warnings.filterwarnings("ignore")

import PIL
import PIL.Image
import os
import os.path as osp
import numpy as np
import numpy.random as npr
import shutil
import copy
# import skfmm
from xing_loss import xing_loss

import yaml
from easydict import EasyDict as edict


pydiffvg.set_print_timing(False)
gamma = 1.0

##########
# helper #
##########

from utils import \
    get_experiment_id, \
    get_path_schedule, \
    edict_2_dict, \
    check_and_create_dir

def get_bezier_circle(radius=1, segments=4, bias=None):
    points = []
    if bias is None:
        bias = (random.random(), random.random())
    avg_degree = 360 / (segments*3)
    for i in range(0, segments*3):
        point = (np.cos(np.deg2rad(i * avg_degree)),
                    np.sin(np.deg2rad(i * avg_degree)))
        points.append(point)
    points = torch.tensor(points)
    points = (points)*radius + torch.tensor(bias).unsqueeze(dim=0)
    points = points.type(torch.FloatTensor)
    return points

def get_sdf(phi, method='skfmm', **kwargs):
    if method == 'skfmm':
        import skfmm
        phi = (phi-0.5)*2
        if (phi.max() <= 0) or (phi.min() >= 0):
            return np.zeros(phi.shape).astype(np.float32)
        sd = skfmm.distance(phi, dx=1)

        flip_negative = kwargs.get('flip_negative', True)
        if flip_negative:
            sd = np.abs(sd)

        truncate = kwargs.get('truncate', 10)
        sd = np.clip(sd, -truncate, truncate)
        # print(f"max sd value is: {sd.max()}")

        zero2max = kwargs.get('zero2max', True)
        if zero2max and flip_negative:
            sd = sd.max() - sd
        elif zero2max:
            raise ValueError

        normalize = kwargs.get('normalize', 'sum')
        if normalize == 'sum':
            sd /= sd.sum()
        elif normalize == 'to1':
            sd /= sd.max()
        return sd

def parse_args():
    parser = argparse.ArgumentParser()
    parser.add_argument('--debug', action='store_true', default=False)
    parser.add_argument("--config", type=str)
    parser.add_argument("--experiment", type=str)
    parser.add_argument("--seed", type=int)
    parser.add_argument("--target", type=str, help="target image path")
    parser.add_argument('--log_dir', metavar='DIR', default="log/debug")
    parser.add_argument('--initial', type=str, default="random", choices=['random', 'circle'])
    parser.add_argument('--signature', nargs='+', type=str)
    parser.add_argument('--seginit', nargs='+', type=str)
    parser.add_argument("--num_segments", type=int, default=4)
    # parser.add_argument("--num_paths", type=str, default="1,1,1")
    # parser.add_argument("--num_iter", type=int, default=500)
    # parser.add_argument('--free', action='store_true')
    # Please ensure that image resolution is divisible by pool_size; otherwise the performance would drop a lot.
    # parser.add_argument('--pool_size', type=int, default=40, help="the pooled image size for next path initialization")
    # parser.add_argument('--save_loss', action='store_true')
    # parser.add_argument('--save_init', action='store_true')
    # parser.add_argument('--save_image', action='store_true')
    # parser.add_argument('--save_video', action='store_true')
    # parser.add_argument('--print_weight', action='store_true')
    # parser.add_argument('--circle_init_radius',  type=float)
    cfg = edict()
    args = parser.parse_args()
    cfg.debug = args.debug
    cfg.config = args.config
    cfg.experiment = args.experiment
    cfg.seed = args.seed
    cfg.target = args.target
    cfg.log_dir = args.log_dir
    cfg.initial = args.initial
    cfg.signature = args.signature
    # set cfg num_segments in command
    cfg.num_segments = args.num_segments
    if args.seginit is not None:
        cfg.seginit = edict()
        cfg.seginit.type = args.seginit[0]
        if cfg.seginit.type == 'circle':
            cfg.seginit.radius = float(args.seginit[1])
    return cfg

def ycrcb_conversion(im, format='[bs x 3 x 2D]', reverse=False):
    mat = torch.FloatTensor([
        [ 65.481/255, 128.553/255,  24.966/255], # ranged_from [0, 219/255]
        [-37.797/255, -74.203/255, 112.000/255], # ranged_from [-112/255, 112/255]
        [112.000/255, -93.786/255, -18.214/255], # ranged_from [-112/255, 112/255]
    ]).to(im.device)

    if reverse:
        mat = mat.inverse()

    if format == '[bs x 3 x 2D]':
        im = im.permute(0, 2, 3, 1)
        im = torch.matmul(im, mat.T)
        im = im.permute(0, 3, 1, 2).contiguous()
        return im
    elif format == '[2D x 3]':
        im = torch.matmul(im, mat.T)
        return im
    else:
        raise ValueError

class random_coord_init():
    def __init__(self, canvas_size):
        self.canvas_size = canvas_size
    def __call__(self):
        h, w = self.canvas_size
        return [npr.uniform(0, 1)*w, npr.uniform(0, 1)*h]

class naive_coord_init():
    def __init__(self, pred, gt, format='[bs x c x 2D]', replace_sampling=True):
        if isinstance(pred, torch.Tensor):
            pred = pred.detach().cpu().numpy()
        if isinstance(gt, torch.Tensor):
            gt = gt.detach().cpu().numpy()

        if format == '[bs x c x 2D]':
            self.map = ((pred[0] - gt[0])**2).sum(0)
        elif format == ['[2D x c]']:
            self.map = ((pred - gt)**2).sum(-1)
        else:
            raise ValueError
        self.replace_sampling = replace_sampling

    def __call__(self):
        coord = np.where(self.map == self.map.max())
        coord_h, coord_w = coord[0][0], coord[1][0]
        if self.replace_sampling:
            self.map[coord_h, coord_w] = -1
        return [coord_w, coord_h]


class sparse_coord_init():
    def __init__(self, pred, gt, format='[bs x c x 2D]', quantile_interval=200, nodiff_thres=0.1):
        if isinstance(pred, torch.Tensor):
            pred = pred.detach().cpu().numpy()
        if isinstance(gt, torch.Tensor):
            gt = gt.detach().cpu().numpy()
        if format == '[bs x c x 2D]':
            self.map = ((pred[0] - gt[0])**2).sum(0)
            self.reference_gt = copy.deepcopy(
                np.transpose(gt[0], (1, 2, 0)))
        elif format == ['[2D x c]']:
            self.map = (np.abs(pred - gt)).sum(-1)
            self.reference_gt = copy.deepcopy(gt[0])
        else:
            raise ValueError
        # OptionA: Zero too small errors to avoid the error too small deadloop
        self.map[self.map < nodiff_thres] = 0
        quantile_interval = np.linspace(0., 1., quantile_interval)
        quantized_interval = np.quantile(self.map, quantile_interval)
        # remove redundant
        quantized_interval = np.unique(quantized_interval)
        quantized_interval = sorted(quantized_interval[1:-1])
        self.map = np.digitize(self.map, quantized_interval, right=False)
        self.map = np.clip(self.map, 0, 255).astype(np.uint8)
        self.idcnt = {}
        for idi in sorted(np.unique(self.map)):
            self.idcnt[idi] = (self.map==idi).sum()
        self.idcnt.pop(min(self.idcnt.keys()))
        # remove smallest one to remove the correct region
    def __call__(self):
        if len(self.idcnt) == 0:
            h, w = self.map.shape
            return [npr.uniform(0, 1)*w, npr.uniform(0, 1)*h]
        target_id = max(self.idcnt, key=self.idcnt.get)
        _, component, cstats, ccenter = cv2.connectedComponentsWithStats(
            (self.map==target_id).astype(np.uint8), connectivity=4)
        # remove cid = 0, it is the invalid area
        csize = [ci[-1] for ci in cstats[1:]]
        target_cid = csize.index(max(csize))+1
        center = ccenter[target_cid][::-1]
        coord = np.stack(np.where(component == target_cid)).T
        dist = np.linalg.norm(coord-center, axis=1)
        target_coord_id = np.argmin(dist)
        coord_h, coord_w = coord[target_coord_id]
        # replace_sampling
        self.idcnt[target_id] -= max(csize)
        if self.idcnt[target_id] == 0:
            self.idcnt.pop(target_id)
        self.map[component == target_cid] = 0
        return [coord_w, coord_h]


def init_shapes(num_paths,
                num_segments,
                canvas_size,
                seginit_cfg,
                shape_cnt,
                pos_init_method=None,
                trainable_stroke=False,
                **kwargs):
    shapes = []
    shape_groups = []
    h, w = canvas_size

    # change path init location
    if pos_init_method is None:
        pos_init_method = random_coord_init(canvas_size=canvas_size)

    for i in range(num_paths):
        num_control_points = [2] * num_segments

        if seginit_cfg.type=="random":
            points = []
            p0 = pos_init_method()
            color_ref = copy.deepcopy(p0)
            points.append(p0)
            for j in range(num_segments):
                radius = seginit_cfg.radius
                p1 = (p0[0] + radius * npr.uniform(-0.5, 0.5),
                      p0[1] + radius * npr.uniform(-0.5, 0.5))
                p2 = (p1[0] + radius * npr.uniform(-0.5, 0.5),
                      p1[1] + radius * npr.uniform(-0.5, 0.5))
                p3 = (p2[0] + radius * npr.uniform(-0.5, 0.5),
                      p2[1] + radius * npr.uniform(-0.5, 0.5))
                points.append(p1)
                points.append(p2)
                if j < num_segments - 1:
                    points.append(p3)
                    p0 = p3
            points = torch.FloatTensor(points)

        # circle points initialization
        elif seginit_cfg.type=="circle":
            radius = seginit_cfg.radius
            if radius is None:
                radius = npr.uniform(0.5, 1)
            center = pos_init_method()
            color_ref = copy.deepcopy(center)
            points = get_bezier_circle(
                radius=radius, segments=num_segments,
                bias=center)

        path = pydiffvg.Path(num_control_points = torch.LongTensor(num_control_points),
                             points = points,
                             stroke_width = torch.tensor(0.0),
                             is_closed = True)
        shapes.append(path)
        # !!!!!!problem is here. the shape group shape_ids is wrong

        if 'gt' in kwargs:
            wref, href = color_ref
            wref = max(0, min(int(wref), w-1))
            href = max(0, min(int(href), h-1))
            fill_color_init = list(gt[0, :, href, wref]) + [1.]
            fill_color_init = torch.FloatTensor(fill_color_init)
            stroke_color_init = torch.FloatTensor(npr.uniform(size=[4]))
        else:
            fill_color_init = torch.FloatTensor(npr.uniform(size=[4]))
            stroke_color_init = torch.FloatTensor(npr.uniform(size=[4]))

        path_group = pydiffvg.ShapeGroup(
            shape_ids = torch.LongTensor([shape_cnt+i]),
            fill_color = fill_color_init,
            stroke_color = stroke_color_init,
        )
        shape_groups.append(path_group)

    point_var = []
    color_var = []

    for path in shapes:
        path.points.requires_grad = True
        point_var.append(path.points)
    for group in shape_groups:
        group.fill_color.requires_grad = True
        color_var.append(group.fill_color)

    if trainable_stroke:
        stroke_width_var = []
        stroke_color_var = []
        for path in shapes:
            path.stroke_width.requires_grad = True
            stroke_width_var.append(path.stroke_width)
        for group in shape_groups:
            group.stroke_color.requires_grad = True
            stroke_color_var.append(group.stroke_color)
        return shapes, shape_groups, point_var, color_var, stroke_width_var, stroke_color_var
    else:
        return shapes, shape_groups, point_var, color_var

class linear_decay_lrlambda_f(object):
    def __init__(self, decay_every, decay_ratio):
        self.decay_every = decay_every
        self.decay_ratio = decay_ratio

    def __call__(self, n):
        decay_time = n//self.decay_every
        decay_step = n %self.decay_every
        lr_s = self.decay_ratio**decay_time
        lr_e = self.decay_ratio**(decay_time+1)
        r = decay_step/self.decay_every
        lr = lr_s * (1-r) + lr_e * r
        return lr


if __name__ == "__main__":

    ###############
    # make config #
    ###############

    cfg_arg = parse_args()
    with open(cfg_arg.config, 'r') as f:
        cfg = yaml.load(f, Loader=yaml.FullLoader)
    cfg_default = edict(cfg['default'])
    cfg = edict(cfg[cfg_arg.experiment])
    cfg.update(cfg_default)
    cfg.update(cfg_arg)
    cfg.exid = get_experiment_id(cfg.debug)

    cfg.experiment_dir = \
        osp.join(cfg.log_dir, '{}_{}'.format(cfg.exid, '_'.join(cfg.signature)))
    configfile = osp.join(cfg.experiment_dir, 'config.yaml')
    check_and_create_dir(configfile)
    with open(osp.join(configfile), 'w') as f:
        yaml.dump(edict_2_dict(cfg), f)

    # Use GPU if available
    pydiffvg.set_use_gpu(torch.cuda.is_available())
    device = pydiffvg.get_device()

    gt = np.array(PIL.Image.open(cfg.target))
    print(f"Input image shape is: {gt.shape}")
    if len(gt.shape) == 2:
        print("Converting the gray-scale image to RGB.")
        gt = gt.unsqueeze(dim=-1).repeat(1,1,3)
    if gt.shape[2] == 4:
        print("Input image includes alpha channel, simply dropout alpha channel.")
        gt = gt[:, :, :3]
    gt = (gt/255).astype(np.float32)
    gt = torch.FloatTensor(gt).permute(2, 0, 1)[None].to(device)
    if cfg.use_ycrcb:
        gt = ycrcb_conversion(gt)
    h, w = gt.shape[2:]

    path_schedule = get_path_schedule(**cfg.path_schedule)

    if cfg.seed is not None:
        random.seed(cfg.seed)
        npr.seed(cfg.seed)
        torch.manual_seed(cfg.seed)
    render = pydiffvg.RenderFunction.apply

    shapes_record, shape_groups_record = [], []

    region_loss = None
    loss_matrix = []

    para_point, para_color = {}, {}
    if cfg.trainable.stroke:
        para_stroke_width, para_stroke_color = {}, {}

    pathn_record = []
    # Background
    if cfg.trainable.bg:
        # meancolor = gt.mean([2, 3])[0]
        para_bg = torch.tensor([1., 1., 1.], requires_grad=True, device=device)
    else:
        if cfg.use_ycrcb:
            para_bg = torch.tensor([219/255, 0, 0], requires_grad=False, device=device)
        else:
            para_bg = torch.tensor([1., 1., 1.], requires_grad=False, device=device)

    ##################
    # start_training #
    ##################

    loss_weight = None
    loss_weight_keep = 0
    if cfg.coord_init.type == 'naive':
        pos_init_method = naive_coord_init(
            para_bg.view(1, -1, 1, 1).repeat(1, 1, h, w), gt)
    elif cfg.coord_init.type == 'sparse':
        pos_init_method = sparse_coord_init(
            para_bg.view(1, -1, 1, 1).repeat(1, 1, h, w), gt)
    elif cfg.coord_init.type == 'random':
        pos_init_method = random_coord_init([h, w])
    else:
        raise ValueError

    lrlambda_f = linear_decay_lrlambda_f(cfg.num_iter, 0.4)
    optim_schedular_dict = {}

    for path_idx, pathn in enumerate(path_schedule):
        loss_list = []
        print("=> Adding [{}] paths, [{}] ...".format(pathn, cfg.seginit.type))
        pathn_record.append(pathn)
        pathn_record_str = '-'.join([str(i) for i in pathn_record])

        # initialize new shapes related stuffs.
        if cfg.trainable.stroke:
            shapes, shape_groups, point_var, color_var, stroke_width_var, stroke_color_var = init_shapes(
                pathn, cfg.num_segments, (h, w),
                cfg.seginit, len(shapes_record),
                pos_init_method,
                trainable_stroke=True,
                gt=gt, )
            para_stroke_width[path_idx] = stroke_width_var
            para_stroke_color[path_idx] = stroke_color_var
        else:
            shapes, shape_groups, point_var, color_var = init_shapes(
                pathn, cfg.num_segments, (h, w),
                cfg.seginit, len(shapes_record),
                pos_init_method,
                trainable_stroke=False,
                gt=gt, )

        shapes_record += shapes
        shape_groups_record += shape_groups

        if cfg.save.init:
            filename = os.path.join(
                cfg.experiment_dir, "svg-init",
                "{}-init.svg".format(pathn_record_str))
            check_and_create_dir(filename)
            pydiffvg.save_svg(
                filename, w, h,
                shapes_record, shape_groups_record)

        para = {}
        if (cfg.trainable.bg) and (path_idx == 0):
            para['bg'] = [para_bg]
        para['point'] = point_var
        para['color'] = color_var
        if cfg.trainable.stroke:
            para['stroke_width'] = stroke_width_var
            para['stroke_color'] = stroke_color_var

        pg = [{'params' : para[ki], 'lr' : cfg.lr_base[ki]} for ki in sorted(para.keys())]
        optim = torch.optim.Adam(pg)

        if cfg.trainable.record:
            scheduler = LambdaLR(
                optim, lr_lambda=lrlambda_f, last_epoch=-1)
        else:
            scheduler = LambdaLR(
                optim, lr_lambda=lrlambda_f, last_epoch=cfg.num_iter)
        optim_schedular_dict[path_idx] = (optim, scheduler)

        # Inner loop training
        t_range = tqdm(range(cfg.num_iter))
        for t in t_range:

            for _, (optim, _) in optim_schedular_dict.items():
                optim.zero_grad()

            # Forward pass: render the image.
            scene_args = pydiffvg.RenderFunction.serialize_scene(
                w, h, shapes_record, shape_groups_record)
            img = render(w, h, 2, 2, t, None, *scene_args)

            # Compose img with white background
            img = img[:, :, 3:4] * img[:, :, :3] + \
                para_bg * (1 - img[:, :, 3:4])

            if cfg.save.video:
                filename = os.path.join(
                    cfg.experiment_dir, "video-png",
                    "{}-iter{}.png".format(pathn_record_str, t))
                check_and_create_dir(filename)
                if cfg.use_ycrcb:
                    imshow = ycrcb_conversion(
                        img, format='[2D x 3]', reverse=True).detach().cpu()
                else:
                    imshow = img.detach().cpu()
                pydiffvg.imwrite(imshow, filename, gamma=gamma)

            x = img.unsqueeze(0).permute(0, 3, 1, 2) # HWC -> NCHW

            if cfg.use_ycrcb:
                color_reweight = torch.FloatTensor([255/219, 255/224, 255/255]).to(device)
                loss = ((x-gt)*(color_reweight.view(1, -1, 1, 1)))**2
            else:
                loss = ((x-gt)**2)

            if cfg.loss.use_l1_loss:
                loss = abs(x-gt)

            if cfg.loss.use_distance_weighted_loss:
                if cfg.use_ycrcb:
                    raise ValueError
                shapes_forsdf = copy.deepcopy(shapes)
                shape_groups_forsdf = copy.deepcopy(shape_groups)
                for si in shapes_forsdf:
                    si.stroke_width = torch.FloatTensor([0]).to(device)
                for sg_idx, sgi in enumerate(shape_groups_forsdf):
                    sgi.fill_color = torch.FloatTensor([1, 1, 1, 1]).to(device)
                    sgi.shape_ids = torch.LongTensor([sg_idx]).to(device)

                sargs_forsdf = pydiffvg.RenderFunction.serialize_scene(
                    w, h, shapes_forsdf, shape_groups_forsdf)
                with torch.no_grad():
                    im_forsdf = render(w, h, 2, 2, 0, None, *sargs_forsdf)
                # use alpha channel is a trick to get 0-1 image
                im_forsdf = (im_forsdf[:, :, 3]).detach().cpu().numpy()
                loss_weight = get_sdf(im_forsdf, normalize='to1')
                loss_weight += loss_weight_keep
                loss_weight = np.clip(loss_weight, 0, 1)
                loss_weight = torch.FloatTensor(loss_weight).to(device)

            if cfg.save.loss:
                save_loss = loss.squeeze(dim=0).mean(dim=0,keepdim=False).cpu().detach().numpy()
                save_weight = loss_weight.cpu().detach().numpy()
                save_weighted_loss = save_loss*save_weight
                # normalize to [0,1]
                save_loss = (save_loss - np.min(save_loss))/np.ptp(save_loss)
                save_weight = (save_weight - np.min(save_weight))/np.ptp(save_weight)
                save_weighted_loss = (save_weighted_loss - np.min(save_weighted_loss))/np.ptp(save_weighted_loss)

                # save
                plt.imshow(save_loss, cmap='Reds')
                plt.axis('off')
                # plt.colorbar()
                filename = os.path.join(cfg.experiment_dir, "loss", "{}-iter{}-mseloss.png".format(pathn_record_str, t))
                check_and_create_dir(filename)
                plt.savefig(filename, dpi=800)
                plt.close()

                plt.imshow(save_weight, cmap='Greys')
                plt.axis('off')
                # plt.colorbar()
                filename = os.path.join(cfg.experiment_dir, "loss", "{}-iter{}-sdfweight.png".format(pathn_record_str, t))
                plt.savefig(filename, dpi=800)
                plt.close()

                plt.imshow(save_weighted_loss, cmap='Reds')
                plt.axis('off')
                # plt.colorbar()
                filename = os.path.join(cfg.experiment_dir, "loss", "{}-iter{}-weightedloss.png".format(pathn_record_str, t))
                plt.savefig(filename, dpi=800)
                plt.close()





            if loss_weight is None:
                loss = loss.sum(1).mean()
            else:
                loss = (loss.sum(1)*loss_weight).mean()

            # if (cfg.loss.bis_loss_weight is not None)  and (cfg.loss.bis_loss_weight > 0):
            #     loss_bis = bezier_intersection_loss(point_var[0]) * cfg.loss.bis_loss_weight
            #     loss = loss + loss_bis
            if (cfg.loss.xing_loss_weight is not None) \
                    and (cfg.loss.xing_loss_weight > 0):
                loss_xing = xing_loss(point_var) * cfg.loss.xing_loss_weight
                loss = loss + loss_xing


            loss_list.append(loss.item())
            t_range.set_postfix({'loss': loss.item()})
            loss.backward()

            # step
            for _, (optim, scheduler) in optim_schedular_dict.items():
                optim.step()
                scheduler.step()

            for group in shape_groups_record:
                group.fill_color.data.clamp_(0.0, 1.0)

        if cfg.loss.use_distance_weighted_loss:
            loss_weight_keep = loss_weight.detach().cpu().numpy() * 1

        if not cfg.trainable.record:
            for _, pi in pg.items():
                for ppi in pi:
                    pi.require_grad = False
            optim_schedular_dict = {}

        if cfg.save.image:
            filename = os.path.join(
                cfg.experiment_dir, "demo-png", "{}.png".format(pathn_record_str))
            check_and_create_dir(filename)
            if cfg.use_ycrcb:
                imshow = ycrcb_conversion(
                    img, format='[2D x 3]', reverse=True).detach().cpu()
            else:
                imshow = img.detach().cpu()
            pydiffvg.imwrite(imshow, filename, gamma=gamma)

        if cfg.save.output:
            filename = os.path.join(
                cfg.experiment_dir, "output-svg", "{}.svg".format(pathn_record_str))
            check_and_create_dir(filename)
            pydiffvg.save_svg(filename, w, h, shapes_record, shape_groups_record)

        loss_matrix.append(loss_list)

        # calculate the pixel loss
        # pixel_loss = ((x-gt)**2).sum(dim=1, keepdim=True).sqrt_() # [N,1,H, W]
        # region_loss = adaptive_avg_pool2d(pixel_loss, cfg.region_loss_pool_size)
        # loss_weight = torch.softmax(region_loss.reshape(1, 1, -1), dim=-1)\
        #     .reshape_as(region_loss)

        pos_init_method = naive_coord_init(x, gt)

        if cfg.coord_init.type == 'naive':
            pos_init_method = naive_coord_init(x, gt)
        elif cfg.coord_init.type == 'sparse':
            pos_init_method = sparse_coord_init(x, gt)
        elif cfg.coord_init.type == 'random':
            pos_init_method = random_coord_init([h, w])
        else:
            raise ValueError

        if cfg.save.video:
            print("saving iteration video...")
            img_array = []
            for ii in range(0, cfg.num_iter):
                filename = os.path.join(
                    cfg.experiment_dir, "video-png", 
                    "{}-iter{}.png".format(pathn_record_str, ii))
                img = cv2.imread(filename)
                # cv2.putText(
                #     img, "Path:{} \nIteration:{}".format(pathn_record_str, ii), 
                #     (10, 10), cv2.FONT_HERSHEY_SIMPLEX, 0.5, (255, 0, 0), 1)
                img_array.append(img)

            videoname = os.path.join(
                cfg.experiment_dir, "video-avi", 
                "{}.avi".format(pathn_record_str))
            check_and_create_dir(videoname)
            out = cv2.VideoWriter(
                videoname, 
                # cv2.VideoWriter_fourcc(*'mp4v'),
                cv2.VideoWriter_fourcc(*'FFV1'), 
                20.0, (w, h))
            for iii in range(len(img_array)):
                out.write(img_array[iii])
            out.release()
            # shutil.rmtree(os.path.join(cfg.experiment_dir, "video-png"))

    print("The last loss is: {}".format(loss.item()))
