/* add code below this */

let input = prompt("Enter bill total: ");
let bill = input;
const rate = 0.1;
let tip = bill * rate;

isNaN(bill) ? console.log("This is not a valid number.") : console.log('For bill of ' + bill + ' the tip should be $' + tip);