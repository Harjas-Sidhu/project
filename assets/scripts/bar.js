let dates_item, dates_item_content;

dates_item = document.getElementsByClassName('dates_item');
dates_item_content = document.getElementsByClassName('dates_item_content');

const tabs = (dates_item_content_number) => {
    for (let i = 0; i < dates_item_content.length; i++) {
        dates_item_content[i].style.display = 'none';
        dates_item[i].style.color = '#565656';
        dates_item[i].style.borderBottom = '0';
    }
    document.getElementById(dates_item_content_number).style.display = 'flex';
    let ele_id = dates_item_content_number.replace(/-content/g,'')
    document.getElementById(ele_id).style.color = '#04D368';
    document.getElementById(ele_id).style.borderBottom = '0.5vh solid #04D368';
}

document.getElementById('first').click();
