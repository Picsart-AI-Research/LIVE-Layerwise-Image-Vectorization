# diffvg

# Install
Please make sure the install environment meets following requirements:<br>
cuda version > 10.1 <br>
gcc version > 7.0<br>
python 3.7+ <br>

```

git submodule update --init --recursive
conda install -y pytorch torchvision -c pytorch
conda install -y numpy
conda install -y scikit-image
conda install -y -c anaconda cmake
conda install -y -c conda-forge ffmpeg
pip install svgwrite
pip install svgpathtools
pip install cssutils
pip install numba
pip install torch-tools
pip install visdom
python setup.py install
```

Here is an example about setting enviroment on slurm (used by most universities):
```bash
module load cuda/11.0
module unload gcc/5.5.0   
module load gcc/8.1.0 
export CC=/shared/centos7/gcc/8.1.0/bin/gcc
export CXX=/shared/centos7/gcc/8.1.0/bin/g++
```
If you have any questions about installation, please let me know.

## Use case
For the layer wise reconstruction, run
```bash
cd pair/Layerwise
# please modify the parameters as you want. See pair/Layerwise/main.py for details.
python main.py demo.png --num_paths 1,1,1,1 --save_loss --save_init --pool_size 12 --save_folder debug --free
```
