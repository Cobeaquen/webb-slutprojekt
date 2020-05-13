var quantity = 1;
var amountLeft;
var price = 160;

window.onload = function() {
    amountLeft = Math.floor((Math.random() * 10) + 1);
    var amountLeftElement = this.document.getElementById("amount-left")
    amountLeftElement.innerHTML = `Only ${amountLeft} left!`;
};

function increaseQuantity() {
    if (quantity < amountLeft) {
        var quantityElement = this.document.getElementById('quantity');
        var priceElement = this.document.getElementById("price");

        quantity++;
        price = quantity * 160;

        quantityElement.innerHTML = quantity;
        priceElement.innerHTML = `$${price}`;
    }
}

function decreaseQuantity() {
    if  (quantity > 1) {
        var quantityElement = this.document.getElementById('quantity');
        var priceElement = this.document.getElementById("price");

        quantity--;
        price = quantity * 160;

        quantityElement.innerHTML = quantity;
        priceElement.innerHTML = `$${price}`;
    }
}