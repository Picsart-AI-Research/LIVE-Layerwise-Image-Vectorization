import torch

use_gpu = torch.cuda.is_available()
device = torch.device('cuda') if use_gpu else torch.device('cpu')

# MPS support: training_device is where PyTorch tensors live for optimization
# render_device is always CPU (diffvg C++ doesn't support MPS)
training_device = None  # Will be set by set_training_device()

def set_use_gpu(v):
    global use_gpu
    global device
    use_gpu = v
    if not use_gpu:
        device = torch.device('cpu')

def get_use_gpu():
    global use_gpu
    return use_gpu

def set_device(d):
    global device
    global use_gpu
    device = d
    use_gpu = device.type == 'cuda'

def get_device():
    global device
    return device

# MPS support functions
def set_training_device(d):
    """Set the device for PyTorch training operations (can be MPS, CUDA, or CPU)"""
    global training_device
    training_device = d

def get_training_device():
    """Get the training device. Falls back to render device if not set."""
    global training_device
    global device
    if training_device is not None:
        return training_device
    return device

def has_mps():
    """Check if MPS (Apple Silicon GPU) is available"""
    return hasattr(torch.backends, 'mps') and torch.backends.mps.is_available()

def get_best_training_device():
    """Get the best available training device: CUDA > MPS > CPU"""
    if torch.cuda.is_available():
        return torch.device('cuda')
    elif has_mps():
        return torch.device('mps')
    return torch.device('cpu')
