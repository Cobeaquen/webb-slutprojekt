var cartqtElement;
var full;

window.onload = function() {
    cartqtElement = this.document.getElementById('cart-quantity');
    full = sessionStorage.getItem('cart_full') == 'true';
    if (full) {
        //cartqtElement.hidden = false;
    }
    else {
        //cartqtElement.hidden = true;
    }
};

function enterCart() {
    if (full) {
        window.location = 'cart.html';
    }
    else {
        window.location = 'cart-empty.html';
    }
}