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


