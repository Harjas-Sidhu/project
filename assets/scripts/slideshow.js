let imageBox = document.getElementById('imgBx');
let images = imageBox.children;

const slideshow = (number) => {
    for (let i = 0; i < images.length; i++) {
        const element = images[i];
        if(i != number){
            element.style.opacity = '0';
            element.style.filter = 'blur(10px)';
            element.style.transform = 'translateX(-50%) scaleX(2)';
        }
    }
    images[number].style.opacity = '1';
    images[number].style.filter = 'blur(0)';
    images[number].style.transform = 'translateX(0) scaleX(1)';
};

let n = 0;

setInterval(() => {
    slideshow(n);
    n++;
    if(n == images.length){
        n = 0;
    }
}, 10000);