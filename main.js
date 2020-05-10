var index = 0;
var index2 = 1;
var imgs = ['bilder/bildspel/img0.jpg', 'bilder/bildspel/img1.jpg', 'bilder/bildspel/img2.jpg', 'bilder/bildspel/img3.jpg']
var newImgElem = document.getElementById('nybild');
var imgElem = document.getElementById('bild');
var timeout;

newImgElem.addEventListener('animationiteration', cycleImage);

function cycleImage() {
    console.log('Byter bild...');

    if (imgElem.style.animationDirection == "reverse") {
        newImgElem.style.backgroundImage = imgElem.style.backgroundImage;
    }
    else {
        imgElem.style.backgroundImage = newImgElem.style.backgroundImage;
    }

    imgElem.style.animationDirection = "normal";
    newImgElem.style.animationDirection = "normal";

    newImgElem.style.animationPlayState = "paused";
    imgElem.style.animationPlayState = "paused";

    timeout = setTimeout(nextImg, 4000);
}

function nextImg() {
    imgElem.style.backgroundImage = "url(" + imgs[index] + ")";
    newImgElem.style.backgroundImage = "url(" + imgs[index2] + ")";

    newImgElem.style.animationPlayState = "running";
    imgElem.style.animationPlayState = "running";

    index = (index + 1) >= imgs.length ? 0 : (index + 1)
    index2 = (index2 + 1) >= imgs.length ? 0 : (index2 + 1)
}

function prevImg() {
    index = ((index - 1) < 0 ? (imgs.length - 1) : (index - 1))
    index2 = ((index2 - 1) < 0 ? (imgs.length - 1) : (index2 - 1))
    
    imgElem.style.backgroundImage = "url(" + imgs[index] + ")";
    newImgElem.style.backgroundImage = "url(" + imgs[index2] + ")";

    imgElem.style.animationDirection = "reverse";
    newImgElem.style.animationDirection = "reverse";

    newImgElem.style.animationPlayState = "running";
    imgElem.style.animationPlayState = "running";
}

function moveImg(forward) {
    console.log('Byter bild...');
    if (imgElem.style.animationPlayState != "running") {
        clearTimeout(timeout);
        if (forward)
            nextImg();
        else
            prevImg();
    }
}

window.onload = function() {
    this.timeout = setTimeout(this.nextImg, 4000);
};