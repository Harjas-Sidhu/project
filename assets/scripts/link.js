const link = (page_id) => {
    let pages = document.getElementsByClassName('event_page');
    for (let i = 0; i < pages.length; i++) {
        pages[i].style.display = 'none';
    }
    document.getElementById('homepage').style.display = 'none';
    if(page_id != 'homepage'){
        document.getElementById('arrow').style.display = 'flex';
    }
    else{
        document.getElementById('arrow').style.display = 'none';
        document.getElementsByTagName('body').style.overflowY = 'scroll';
    }
    document.getElementById(page_id).style.display = 'flex';
}

link('homepage');