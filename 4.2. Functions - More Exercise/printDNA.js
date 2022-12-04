// Write a JS program that prints a DNA helix with a length, specified by the user. The helix has a repeating structure, but the symbol in the chain follows the sequence ATCGTTAGGG. See the examples for more information.
// The input comes as a single number. It represents the length of the required helix.
// The output is the completed structure, printed on the console.

function printDNA(number) {

    let str = "ATCGTTAGGG";
    let counter = 0;

    for (let i = 0; i < number; i++) {

        if (i % 4 == 0) {
            console.log(`**${str[counter % 10]}${str[(counter % 10) + 1]}**`);
        } else if (i % 4 == 1) {
            console.log(`*${str[counter % 10]}--${str[(counter % 10) + 1]}*`);
        } else if (i % 4 == 2) {
            console.log(`${str[counter % 10]}----${str[(counter % 10) + 1]}`);
        } else if (i % 4 == 3) {
            console.log(`*${str[counter % 10]}--${str[(counter % 10) + 1]}*`);
        }

        counter += 2;

    }

}
//printDNA(4)
printDNA(10)
