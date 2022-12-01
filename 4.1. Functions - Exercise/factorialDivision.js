// Write a function that receives two integer numbers. Calculate the factorial of each number. 
// Divide the first result by the second and print the division formatted to the second decimal point.

function factorialDivision(numOne, numTwo) {

    let firstFactorial = 1;
    let secondFactorial = 1;

    for (let i = numOne; i > 0; i--) {

        let currentNum = i;
        firstFactorial *= currentNum;
    }
    for (let j = numTwo; j > 0; j--) {

        let currentNum = j;
        secondFactorial *= currentNum;
    }

    let result = firstFactorial / secondFactorial;
    console.log(result.toFixed(2));

}
factorialDivision(5, 2)
factorialDivision(6, 2)
