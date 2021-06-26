function calculateInvoice(starterPrice, mainDishPrice, dessertPrice, beveragePrice) {
    return starterPrice + mainDishPrice + dessertPrice + beveragePrice
}


const starterPrice = 9;
const mainDishPrice = 21;
const dessertPrice = 6;
const beveragePrice = 7;

console.log("calculateInvoice for 4 variables", calculateInvoice(starterPrice, mainDishPrice, dessertPrice, beveragePrice))

console.log("calculateInvoice combination #1", calculateInvoice(9, 21, 6, 7))
console.log("calculateInvoice combination #2", calculateInvoice(11, 12, 6, 5))
console.log("calculateInvoice combination #3", calculateInvoice(10, 19, 7, 6))

function studentInvoice(starterPrice, mainDishPrice, dessertPrice, beveragePrice) {
    return ((starterPrice + mainDishPrice + dessertPrice) * 0.9) + beveragePrice
}

console.log("studentInvoice with 10 percent discount #1", studentInvoice(9, 21, 6, 7))
console.log("studentInvoice with 10 percent discount #2", studentInvoice(11, 12, 6, 5))
console.log("studentInvoice with 10 percent discount #3", studentInvoice(10, 19, 7, 6))
