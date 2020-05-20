var list = document.getElementById('product-filter');
var allProducts = document.getElementById('all-products-filter');

var products = document.getElementById('all-products');

var filterElems = [];

for (var i = 0; i < list.children.length; i++) {
    changeEvents = list.children.item(i).onchange = (e) => {
        if (e !== allProducts) {
            allProducts.checked = false;
        }
    };
}

allProducts.onchange = (e) => {
    if (allProducts.checked) {
        for (var i = 0; i < list.children.length; i++)
        {
            var elem = list.children.item(i);
            if (elem !== allProducts) {
                elem.checked = allProducts.checked;
            }

            filterElems.push(elem);
        }
    }

    for (var i = 0; i < products.children.length; i++) {
        var elem = list.children.item(i);
        
        elem.hidden = true;

        if ()

        if (elem.checked) {
            switch (elem.id) {
                case "keyboards":
                    elem.hidden = false;
                    break;
                case "cases-and-plates":
                    elem.hidden = false;
                    break;
                case "pcbs":
                    elem.hidden = false;
                    break;
                case "custom-assembly":
                    elem.hidden = false;
                    break;
            
                default:
                    break;
            }
        }
    }
};

function elem(className) {
    return document.getElementById(className);
}

window.onload = (e) => {
    allProducts.checked = true;
    allProducts.onchange();
}