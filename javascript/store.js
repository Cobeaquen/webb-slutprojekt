var list = document.getElementById('product-filter');
var allProducts = document.getElementById('all-products-filter');

var products = document.getElementById('all-products');

var filterElems = [];

var keyboards = false;
var cases_plates = false;
var pcbs = false;
var custom_assembly = false;

for (var i = 0; i < list.children.length; i++) {
    changeEvents = list.children.item(i).onchange = (e) => {
        var elem = e.srcElement;
        if (elem.id !== allProducts.id) {
            allProducts.checked = false;
        }
        /*
        else if (allProducts.checked) {
            for (var i = 0; i < list.children.length; i++) {
                if (list.children.item(i) !== )
            }
        }
        */
        //keyboards = e == list.children.item
        switch (e.srcElement.id) {
            case "keyboards-filter":
                keyboards = e.checked;
                break;
            case "cases-and-plates-filter":
                cases_plates = e.checked;
                break;
            case "pcbs-filter":
                pcbs = e.checked;
                break;
            case "custom-assembly-filter":
                custom_assembly = e.checked;
                break;
            case "all-products-filter":
                keyboards = allProducts.checked;
                cases_plates = allProducts.checked;
                pcbs = allProducts.checked;
                custom_assembly = allProducts.checked;
                break;
            default:
                break;
        }
    };
}

function elem(className) {
    return document.getElementById(className);
}

window.onload = (e) => {
    allProducts.checked = true;
    allProducts.onchange(e);
}