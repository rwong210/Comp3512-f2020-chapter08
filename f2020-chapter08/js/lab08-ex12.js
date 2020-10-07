// define functions in this file

const stock1 = {};
stock1.symbol = "ADBE";
stock1.price = 286.81;
console.log(`${stock1.symbol} Open: ${stock1.price} `);

const stock2 = {
    symbol: "AAPL",
    name: "Apple Inc. ",
    prices: [ 200, 198, 202, 197, 203 ],
    location: {
        address: "One Apple Park Way",
        city: "Cupertino"
    }
}
console.log(`${stock2.name} Address: ${stock2.location.address}`);

console.log(stock2);
console.log(stock2['name']);
console.log(stock2['location'].address);
console.log(stock2['location']['city']);

for(let i=0; i< stock2.prices.length; i++){
    console.log(stock2.prices[i]);
}

for (let property in stock2){
    let value = stock2[property];
    console.log(property + "=" + value);
}

const someStocks = [ stock1, stock2 ];
for (let i=0; i<someStocks.length; i++){
    console.log(someStocks[i].symbol);
}

const portfolio = [
    {symbol: "AAPL", price: 200, quantity: 20 },
    {symbol: "ADBE", price: 260, quantity: 10 },
    {symbol: "GOOG", price: 1200, quantity: 5 }
];

for (let item of portfolio){
    let worth = item.price * item.quantity;
    console.log(`${item.symbol} = $${worth}`);
}
