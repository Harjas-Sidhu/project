window.onload = () => {
    document.getElementsByTagName('body')[0].style.overflow = 'hidden';
    setTimeout(() => {
        document.getElementById('preloader').style.display = 'none';
        document.getElementsByTagName('body')[0].style.overflowY = 'scroll';
    }, 2000);
};
