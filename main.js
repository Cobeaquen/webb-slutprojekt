function imageCycle() {
    var index = 0;

    changeBanner();

    var imgs = ['bilder\\bildspel\\img1.jpg', 'bilder\\bildspel\\img2.jpg', 'bilder\\bildspel\\img3.jpg']

    function changeBanner() {
        [].forEach.call(document.images, function(v, i) {
            document.images[i].hidden = i !== index
        });
        index = (index + 1) % document.images.length;
    }
}

window.onload = function() {
    setInterval(this.imageCycle, 1000)
};