let nav = false;

const CloseNav = () => {
    document.getElementById('side_bar').style.backdropFilter = 'none';
    document.getElementById('side_bar').style['-webkit-backdrop-filter'] = 'none';
    setTimeout(() => {
        document.getElementById('side_bar').style.width = '0';
    }, 600);
    nav = false;
}

const OpenNav = () => {
    document.getElementById('side_bar').style.width = '100%';
    setTimeout(() => {
        document.getElementById('side_bar').style.backdropFilter = 'blur(10px)';
        document.getElementById('side_bar').style['-webkit-backdrop-filter'] = 'blur(10px)';
    }, 300);
    nav = true;
}

const ToggleNav = () => {
    nav ? CloseNav() : OpenNav();
}