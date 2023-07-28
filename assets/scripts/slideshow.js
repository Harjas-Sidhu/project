let imageBox = document.getElementById('imgBx');
let images = imageBox.children;

window.onpointerdown = (e) => {
    imageBox.dataset.mouseDownAt = e.clientX;
}

window.onpointermove = (e) => {

    if(imageBox.dataset.mouseDownAt === "0"){
        return;
    }

    const mouseDelta = parseFloat(imageBox.dataset.mouseDownAt) - e.clientX;
    const maxDelta = window.innerWidth/2;

    const percentage = (mouseDelta/maxDelta) * -100;
    let nextPercentage = parseFloat(imageBox.dataset.prev) + percentage;

    imageBox.dataset.percentage = nextPercentage;

    nextPercentage *= 3;

    nextPercentage = Math.min(nextPercentage, -10);
    nextPercentage = Math.max(nextPercentage, -90);

    

    imageBox.animate(
        {transform : `translateX(${nextPercentage}%)`}
        , {duration : 1200, fill: "forwards"});

    for(const image of images){
        image.animate(
            {objectPosition : `${nextPercentage + 100}% 50%`}
            , {duration : 1200, fill: "forwards"});
    }
    imageBox.dataset.prev = imageBox.dataset.percentage;
}

window.onpointerup = (e) => {
    imageBox.dataset.mouseDownAt = "0";
    imageBox.dataset.prev = imageBox.dataset.percentage;
}

window.ontouchcancel = (e) => {
    imageBox.dataset.mouseDownAt = "0";
    imageBox.dataset.prev = imageBox.dataset.percentage;
}