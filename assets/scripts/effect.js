const alphabets = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

const effect = (element) => {
    let imageBox = document.getElementById('imgBx');
    let images = imageBox.children;

    for(const chil of images){
        if(chil.id == "wrapper"){
            chil.remove();
        }
        if(chil != element){
            chil.style.opacity = '0.4';
            chil.style.height = '100%';
        }
    }

    let div = document.createElement('div');
    div.id = "wrapper";
    div.style.width = "0";
    div.style.height = "0";

    let text = document.createElement('h1');
    text.id = "text";
    text.innerText = element.dataset.value;

    div.appendChild(text);

    element.style.opacity = '1';
    element.style.height = '115%';

    element.insertAdjacentElement("afterend", div);

    let iteration = 0;
    const interval = setInterval(() => {
        if (iteration > document.getElementById('text').innerText.length) {
            clearInterval(interval);
        }
        document.getElementById('text').innerText = 
        document.getElementById('text').innerText.split("").map((letter, index) => {
            if (index < iteration) {
                return element.dataset.value[index];
            }
            return alphabets[Math.floor(Math.random() * 26)]
        }).join("");
        iteration += 1 / 2;
    }, 30);
}