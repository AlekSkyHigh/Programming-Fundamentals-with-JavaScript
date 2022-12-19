// Let`s take a break and visit the game bar at SoftUni. It is about time for the people behind the bar to go home and you are the person who has to draw the line and calculate the money from the products that were sold throughout the day. Until you receive a line with the text "end of shift" you will be given lines of input. But before processing that line you have to do some validations first.
// Each valid order should have a customer, product, count, and a price:
// •	Valid customer's name should be surrounded by '%' and must start with a capital letter, followed by lower-case letters
// •	Valid product contains any word character and must be surrounded by '<' and '>' 
// •	Valid count is an integer, surrounded by '|'
// •	Valid price is any real number followed by '$'
// The parts of a valid order should appear in the order given: customer, product, count, and price.
// Between each part there can be other symbols, except ('|', '$', '%' and '.')
// For each valid line print on the console: "{customerName}: {product} - {totalPrice}"
// When you receive "end of shift" print the total amount of money for the day rounded to 2 decimal places in the following format: "Total income: {income}".

function softUniBarIncome(inputArrayStrings) {

    let pattern = /%(?<customer>[A-Z][a-z]+)%[^|$%.]*<(?<product>\w+)>[^|$%.]*\|(?<count>[0-9]+)\|[^0-9\|$%.]*(?<price>[0-9|\.]+)\$/gm

    let totalIncome = 0;
    let line = inputArrayStrings.shift();

    while (line !== 'end of shift') {

        let currentData = pattern.exec(line);

        if (currentData) {

            let currentCustomer = currentData.groups['customer'];
            let currentProduct = currentData.groups['product'];
            let currentCount = Number(currentData.groups['count']);
            let currentPrice = Number(currentData.groups['price']);

            let totalProductPrice = currentCount * currentPrice;
            console.log(`${currentCustomer}: ${currentProduct} - ${totalProductPrice.toFixed(2)}`);
            totalIncome += totalProductPrice;

            line = inputArrayStrings.shift();
            currentData = pattern.exec(line);
        } else {
            line = inputArrayStrings.shift();
        }
    }
    console.log(`Total income: ${totalIncome.toFixed(2)}`);
}
softUniBarIncome([
    '%George%<Croissant>|2|10.3$',
    '%Peter%<Gum>|1|1.3$',
    '%Maria%<Cola>|1|2.4$',
    'end of shift'
])
