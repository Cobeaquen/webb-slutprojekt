var index = 0;
var imgs = ['bilder\\bildspel\\img1.jpg', 'bilder\\bildspel\\img2.jpg', 'bilder\\bildspel\\img3.jpg']

function imageCycle() {
    imgs.forEach().call(function(v, i) {
        imgs[i].hidden = i !== index
    });
    index = (index + 1) % document.images.length;
}

window.onload = function() {
    setInterval(this.imageCycle(), 1000)
};