let nav = false;

const CloseNav = () => {
    document.getElementById('side_bar').style.backdropFilter = 'none';
    document.getElementById('side_bar').style['-webkit-backdrop-filter'] = 'none';
    setTimeout(() => {
        document.getElementById('side_bar').style.width = '0';
    }, 600);
    let homepage = document.getElementById('homepage').style.display;
    if(homepage != 'none'){
        document.getElementsByTagName('body')[0].style.overflowY = 'scroll';
    }
    else{
        document.getElementsByTagName('body')[0].style.overflow = 'hidden';
    }
    nav = false;
}

const OpenNav = () => {
    document.getElementById('side_bar').style.width = '100%';
    setTimeout(() => {
        document.getElementById('side_bar').style.backdropFilter = 'blur(10px)';
        document.getElementById('side_bar').style['-webkit-backdrop-filter'] = 'blur(10px)';
    }, 600);
    document.getElementsByTagName('body')[0].style.overflow = 'hidden';
    nav = true;
}

const ToggleNav = () => {
    nav ? CloseNav() : OpenNav();
}