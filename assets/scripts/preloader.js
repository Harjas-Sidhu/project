window.onload = () => {
    document.getElementsByTagName('body')[0].style.overflow = 'hidden';
    setTimeout(() => {
        document.getElementById('preloader').style.display = 'none';
        document.getElementsByTagName('body')[0].style.overflowY = 'scroll';
        if(document.getElementsByClassName('discirpt-box')[0]){
            document.getElementsByClassName('heading')[0].style.animation = 'Aryan 2s linear';
            document.getElementsByClassName('para')[0].style.animation = 'Aryan-para 2s linear';
            document.getElementsByClassName('discirpt-box')[0].style.animation = 'opening 1.5s ease-in-out';
        }
    }, 2000);
};
