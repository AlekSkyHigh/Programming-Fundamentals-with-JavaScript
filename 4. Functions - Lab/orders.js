// Write a function that calculates the total price of an order and prints it on the console. The function should receive one of the following products: coffee, coke, water, snacks; and a quantity of the product. The prices for a single piece of each product are: 
// •	coffee - 1.50
// •	water - 1.00
// •	coke - 1.40
// •	snacks - 2.00
// Print the result formatted to the second decimal place.

function orders(product, quantity) {

    let totalPrice = 0;

    switch (product) {
        case "coffee": totalPrice = quantity * 1.50; break;
        case "water": totalPrice = quantity * 1.00; break;
        case "coke": totalPrice = quantity * 1.40; break;
        case "snacks": totalPrice = quantity * 2.00; break;
    }
    console.log(totalPrice.toFixed(2));
}
orders("water", 5)
orders("coffee", 2)
