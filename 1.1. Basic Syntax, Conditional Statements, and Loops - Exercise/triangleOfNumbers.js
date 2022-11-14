// Write a function, which receives a single number – n, and prints a triangle from 1 to n.

function triangleOfNumbers(number) {

    let printLine = ``;

    for (let row = 1; row <= number; row++) {

        for (let col = 1; col <= row; col++) {
            printLine += `${row} `;
        };
      
        printLine += '\n';
    };
  
    console.log(printLine);
}
// triangleOfNumbers(3)
// triangleOfNumbers(5)
triangleOfNumbers(6)
