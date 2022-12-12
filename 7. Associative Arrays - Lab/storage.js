// Write a function that takes a certain number of items and their quantity. 
// If the same item appears more than once, add the new amount to the existing one. 
// In the end, print all the items and their amount without sorting them. The input comes as an array of strings. Try using a Map().

function storage(inputStrings) {

    let map = new Map();

    for (let line of inputStrings) {
        let [product, quantity] = line.split(" ");
        quantity = Number(quantity);

        if (!map.has(product)) {
            map.set(product, + quantity);
        } else {
            let currentQuantity = map.get(product);
            let newQuantity = currentQuantity += quantity;
            map.set(product, newQuantity);
        }
    }

    for (let kvp of map) {
        console.log(`${kvp[0]} -> ${kvp[1]}`);
    }

}
storage([
    'tomatoes 10',
    'coffee 5',
    'olives 100',
    'coffee 40'
])

storage([
    'apple 50',
    'apple 61',
    'coffee 115',
    'coffee 40'
])
