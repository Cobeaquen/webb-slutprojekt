var quantity = 1;
var amountLeft = 0;
var price = 160;

var quantityElement;
var priceElement;
var cartqtElement;
var totalCost;


window.onload = function() {
    this.amountLeft = Number(sessionStorage.getItem('amount_left'));
    this.quantity = Number(sessionStorage.getItem('quantity'));

    if (this.amountLeft == 0) {
        amountLeft = Math.floor((Math.random() * 10) + 1);
    }
    var amountLeftElement = this.document.getElementById("amount-left")
    amountLeftElement.innerHTML = `Only ${amountLeft} left!`;

    this.quantityElement = this.document.getElementById('quantity');
    this.priceElement = this.document.getElementById("price");
    this.totalCost = this.document.getElementById("total-cost");
    this.cartqtElement = document.getElementById('cart-quantity');
    sessionStorage.setItem('amount_left', amountLeft.toString());

    price = quantity * 160;

        quantityElement.innerHTML = quantity;
        priceElement.innerHTML = `$${price}`;
        if (totalCost != null)
            totalCost.innerHTML = `Total cost: $${price + 10}`;
};

function increaseQuantity() {
    if (quantity < amountLeft) {
        quantity++;
        price = quantity * 160;

        quantityElement.innerHTML = quantity;
        priceElement.innerHTML = `$${price}`;
        if (totalCost != null)
            totalCost.innerHTML = `Total cost: $${price + 10}`;
        
        sessionStorage.setItem('quantity', quantity.toString());
    }
}

function decreaseQuantity() {
    if  (quantity > 1) {
        quantity--;
        price = quantity * 160;

        quantityElement.innerHTML = quantity;
        priceElement.innerHTML = `$${price}`;
        if (totalCost != null)
            totalCost.innerHTML = `Total cost: $${price + 10}`;

        sessionStorage.setItem('quantity', quantity.toString());
    }
}

function addToCart() {
    sessionStorage.setItem('cart_full', 'true');
    location.href='cart.html';
}