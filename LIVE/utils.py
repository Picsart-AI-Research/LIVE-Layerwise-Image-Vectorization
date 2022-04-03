import os
import os.path as osp

def get_experiment_id(debug=False):
    if debug:
        return 999999999999
    import time
    time.sleep(0.5)
    return int(time.time()*100)

def get_path_schedule(type, **kwargs):
    if type == 'repeat':
        max_path = kwargs['max_path']
        schedule_each = kwargs['schedule_each']
        return [schedule_each] * max_path
    elif type == 'list':
        schedule = kwargs['schedule']
        return schedule
    elif type == 'exp':
        import math
        base = kwargs['base']
        max_path = kwargs['max_path']
        max_path_per_iter = kwargs['max_path_per_iter']
        schedule = []
        cnt = 0
        while sum(schedule) < max_path:
            proposed_step = min(
                max_path - sum(schedule), 
                base**cnt, 
                max_path_per_iter)
            cnt += 1
            schedule += [proposed_step]
        return schedule
    else:
        raise ValueError

def edict_2_dict(x):
    if isinstance(x, dict):
        xnew = {}
        for k in x:
            xnew[k] = edict_2_dict(x[k])
        return xnew
    elif isinstance(x, list):
        xnew = []
        for i in range(len(x)):
            xnew.append( edict_2_dict(x[i]) )
        return xnew
    else:
        return x

def check_and_create_dir(path):
    pathdir = osp.split(path)[0]
    if osp.isdir(pathdir):
        pass
    else:
        os.makedirs(pathdir)
