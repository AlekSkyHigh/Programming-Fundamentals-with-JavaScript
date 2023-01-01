// Write a program that prints you a receipt for your new computer. You will receive the parts' prices (without tax) until you receive what type of customer this is - special or regular. Once you receive the type of customer you should print the receipt.
// The taxes are 20% of each part's price you receive. 
// If the customer is special, he has a 10% discount on the total price with taxes.
// If a given price is not a positive number, you should print "Invalid price!" on the console and continue with the next price.
// If the total price is equal to zero, you should print "Invalid order!" on the console.

function computerStore(inputArray) {

    let index = 0;
    let command = inputArray[index];
    index++;

    let totalPriceWithoutTaxes = 0;
    let taxes = 0;
    let totalPrice = 0;

    while (command !== "special" && command !== "regular") {

        let currentPrice = Number(command);

        if (currentPrice < 0) {
            console.log("Invalid price!");
            command = inputArray[index];
            index++;
            continue;
        }

        totalPriceWithoutTaxes += currentPrice;
        taxes += currentPrice * 0.20;

        command = inputArray[index];
        index++;
    }

    if (command === "special") {
        totalPrice = (totalPriceWithoutTaxes + taxes) * 0.90;
    } else {
        totalPrice = totalPriceWithoutTaxes + taxes;
    }

    if (totalPrice === 0) {
        console.log(`Invalid order!`);
        return;
    }

    console.log(`Congratulations you've just bought a new computer!
    Price without taxes: ${totalPriceWithoutTaxes.toFixed(2)}$
    Taxes: ${taxes.toFixed(2)}$
    -----------
    Total price: ${totalPrice.toFixed(2)}$`);
}
// computerStore([
//     '1050',
//     '200',
//     '450',
//     '2',
//     '18.50',
//     '16.86',
//     'special'
// ])

computerStore([
    '1023',
    '15',
    '-20',
    '-5.50',
    '450',
    '20',
    '17.66',
    '19.30', 'regular'
])

// computerStore([
//     'regular'
// ])

