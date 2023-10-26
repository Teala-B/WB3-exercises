"use strict"

function data(neededInfo) {

    let colon = neededInfo.indexOf(":")
    let dash = neededInfo.indexOf("-")
    let supplier = getSupplier(neededInfo, colon)
    let productNumbers = getProductNumber(neededInfo, colon, dash)
    let size = getSize(neededInfo, dash)
    display(neededInfo, supplier, productNumbers, size)
}


function getSupplier(code, colon) {
//that returns all characters before the :
    let supplier = code.substring(0, colon)
    return supplier
}


function getProductNumber(code, colon, dash) {
//that returns all characters between the : and -
    let productNumbers = code.substring(colon + 1, dash)
    return productNumbers
}


function getSize(code, dash) {
//that returns all characters after the -
    let size = code.substring(dash + 1)
    return size
}
function display(neededInfo, supplier, productNumbers, size) {
    console.log(" " + neededInfo);
    console.log("Supplier:       " + supplier);
    console.log("Product Number: " + productNumbers);
    console.log("Size:           " + size);
    console.log("\n");
}

data("ACME:123-L")
data("DI:12345-M")
data("ACE:1-12")
