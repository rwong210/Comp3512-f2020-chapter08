/* add code below this */

//let input = prompt("Enter bill total: ");
//let bill = input;
//const rate = 0.1;
//let tip = bill * rate;

// isNaN(bill) ? console.log("This is not a valid number.") : console.log('For bill of ' + bill + ' the tip should be $' + tip);

const billTotals = [50, 150, 20, 500];

const tips = new Array();

let tip;

/*for (let bill of billTotals) {
    if (bill > 75)
        tip = bill * 0.1;

    else if (bill <= 75 && bill >= 30)
        tip = bill * 0.2;

    else if (bill < 30)
        tip = bill * 0.3;

    tips.push(tip);
}
for (let i = 0; i < billTotals.length; i++){
    console.log(`For bill of \$${billTotals[i]} the tip should be \$${tips[i]}`);
};
*/

function calculateTip(total){
    if (total > 75)
    tip = total * 0.1;

else if (total <= 75 && total >= 30)
    tip = total * 0.2;

else if (total < 30)
    tip = total * 0.3;

    return tip;
}

for (let b of billTotals){
    console.log(calculateTip(b));
}