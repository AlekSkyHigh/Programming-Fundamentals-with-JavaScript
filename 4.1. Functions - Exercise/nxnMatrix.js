// Write a function that receives a single integer number n and prints nxn matrix with that number.

function nxnMatrix(number) {

    let result = "";

    for (let col = 1; col <= number; col++) {

        for (let row = 1; row <= number; row++) {

            result += `${number} `;
        }
        result += "\n";
    }

    console.log(result);

}
// nxnMatrix(3)
nxnMatrix(7)
// nxnMatrix(2)
