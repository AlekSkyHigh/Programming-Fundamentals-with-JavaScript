// Write a function to calculate the total cost of different types of furniture. You will be given some lines of input until you receive the line "Purchase". For the line to be valid it should be in the following format:
// ">>{furniture name}<<{price}!{quantity}"
// The price can be a floating-point number or a whole number. Furniture items must start with a capital letter. Store the names of the furniture and the total price. At the end print each bought furniture on a separate line in the format:
// "Bought furniture:
// {1st name} 
// {2nd name} 
// …"
// And on the last line print, the following: "Total money spend: {spend money}" formatted to the second decimal point.
// If there are not valid furniture print only:
// Bought furniture:
// Total money spend: {spend money}

function furniture(inputArrayStrings) {

    let pattern = /[>>]{2}(?<item>[A-Za-z]+)[<<]{2}(?<price>[\d]+[\.]*[\d]+)!(?<quantity>[\d]+)/gm;
    let index = 0;
    let totalMoneySpent = 0;
    console.log('Bought furniture:');

    while (inputArrayStrings[index] !== 'Purchase') {

        let currentLine = inputArrayStrings[index];
        let validLine = pattern.exec(currentLine);

        while (validLine !== null) {
            let item = validLine.groups['item'];
            console.log(item);
            let price = validLine.groups['price'];
            let quantity = validLine.groups['quantity'];

            totalMoneySpent += price * quantity;

            validLine = pattern.exec(currentLine);
        }

        index++
    }
    console.log(`Total money spend: ${totalMoneySpent.toFixed(2)}`);
}
furniture([
    '>>Sofa<<312.23!3',
    '>>TV<<300!5',
    '>Invalid<<!5',
    'Purchase'
])

furniture([
    '>>Laptop<<312.2323!3',
    '>>TV<<300.21314!5',
    '>Invalid<<!5',
    '>>TV<<300.21314!20',
    '>>Invalid<!5',
    '>>TV<<30.21314!5',
    '>>Invalid<<!!5',
    'Purchase'
])
