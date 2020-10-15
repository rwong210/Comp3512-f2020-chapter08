/* code goes here */

const isCanadian = true;



function calculateTax(amount, tax) {
    return amount + tax();
}

function calculateTotal(price, quantity) {
    let amount = price + quantity;
    return amount + calculateTax(amount, function () {
        if (isCanadian) {
            return 0.05;
        } else {
            return 0.0;
        }
    });
}

