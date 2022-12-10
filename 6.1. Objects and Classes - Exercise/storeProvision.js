// You will receive two arrays. The first array represents the current stock of the local store. The second array will contain products that the store has ordered for delivery.
// The following information applies to both arrays:
// Every even index will hold the name of the product and every odd index will hold the quantity of that product. The second array could contain products that are already in the local store. If that happens increase the quantity for the given product. You should store them into an object, and print them in the following format: (product -> quantity)
// All of the arrays’ values will be strings.

function storeProvision(availableStock, orderedStock) {

    const inStock = {};
    const availableStockLength = availableStock.length;
    const orderedStockLength = orderedStock.length;

    for (let index = 0; index < availableStockLength; index += 2) {
        const currentProduct = availableStock[index];
        inStock[currentProduct] = Number(availableStock[index + 1]);
    }
    for (let index = 0; index < orderedStockLength; index += 2) {
        const currentProduct = orderedStock[index];

        if (!inStock.hasOwnProperty(currentProduct)) {
            inStock[currentProduct] = 0;
        }
        inStock[currentProduct] += Number(orderedStock[index + 1]);
    }

    for (const product in inStock) {
        console.log(`${product} -> ${inStock[product]}`);
    }

}
storeProvision(
    ['Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'],
    ['Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30']
)

// storeProvision(
//     ['Salt', '2', 'Fanta', '4', 'Apple', '14', 'Water', '4', 'Juice', '5'],
//     ['Sugar', '44', 'Oil', '12', 'Apple', '7', 'Tomatoes', '7', 'Bananas', '30']
// )
