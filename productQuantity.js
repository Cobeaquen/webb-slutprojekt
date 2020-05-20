var quantity = 1;
var amountLeft;
var price = 160;

var quantityElement; 
var priceElement;
var totalCost;


window.onload = function() {
    amountLeft = Math.floor((Math.random() * 10) + 1);
    var amountLeftElement = this.document.getElementById("amount-left")
    amountLeftElement.innerHTML = `Only ${amountLeft} left!`;

    this.quantityElement = this.document.getElementById('quantity');
    this.priceElement = this.document.getElementById("price");
    this.totalCost = this.document.getElementById("total-cost");
};

function increaseQuantity() {
    if (quantity < amountLeft) {
        quantity++;
        price = quantity * 160;

        quantityElement.innerHTML = quantity;
        priceElement.innerHTML = `$${price}`;
        if (totalCost != null)
            totalCost.innerHTML = `Total cost: $${price + 10}`;
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
    }
}