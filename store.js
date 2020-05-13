var list = document.getElementById('product-specifier');
var allProducts = document.getElementById('all-products');

for (var i = 0; i < list.children.length; i++) {
    list.children.item(i).onchange = (e) => {
        if (e !== allProducts) {
            allProducts.checked = false;
        }
    };
}



allProducts.onchange = (e) => {
    if (!allProducts.checked)
        return;

    for (var i = 0; i < list.children.length; i++)
    {
        let elem = list.children.item(i);
        if (elem !== allProducts) {
            elem.checked = allProducts.checked;
        }
    }
};