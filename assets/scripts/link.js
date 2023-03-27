const link = (page_id) => {
    let pages = document.getElementsByClassName('event_page');
    for (let i = 0; i < pages.length; i++) {
        pages[i].style.display = 'none';
    }
    document.getElementById('homepage').style.display = 'none';
    if(page_id != 'homepage'){
        document.getElementById('arrow').style.display = 'flex';
        document.getElementsByTagName('body')[0].style.overflow = 'hidden';
    }
    else{
        document.getElementById('arrow').style.display = 'none';
        document.getElementsByTagName('body')[0].style.overflowY = 'scroll';
        document.getElementsByTagName('body')[0].style.overflowX = 'hidden';
    }
    document.getElementById(page_id).style.display = 'flex';
}

link('homepage');