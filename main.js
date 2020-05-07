var index = 0;
var index2 = 1;
var imgs = ['bilder/bildspel/img0.jpg', 'bilder/bildspel/img1.jpg', 'bilder/bildspel/img2.jpg', 'bilder/bildspel/img3.jpg']
var newImgElem = document.getElementById('nybild');
var imgElem = document.getElementById('bild');
newImgElem.addEventListener('animationiteration', cycleImage);

function cycleImage() {
    console.log('Byter bild...');

    newImgElem.backgroundImage = null;

    imgElem.style.backgroundImage = newImgElem.style.backgroundImage;

    //newImgElem.style.backgroundImage = "url("+ imgs[index2] + ")";
    //imgElem.style.backgroundImage = "url("+ imgs[index] + ")";

    newImgElem.style.animationPlayState = "paused";
    imgElem.style.animationPlayState = "paused";

    setTimeout(nextImg, 3000);
}

function nextImg() {
    imgElem.style.backgroundImage = "url("+ imgs[index] + ")";
    newImgElem.style.backgroundImage = "url("+ imgs[index2] + ")";

    

    newImgElem.style.animationPlayState = "running";
    imgElem.style.animationPlayState = "running";

    index = (index + 1) % imgs.length;
    index2 = (index2 + 1) % imgs.length;
}

window.onload = function() {
    //setInterval(this.imageCycle, 3000)
    setTimeout(this.nextImg, 3000);
};