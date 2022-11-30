// You will receive three integer numbers. 
// Write a function sum() to calculate the sum of the first two integers and a function subtract(), which subtracts the result of the function the sum() and the third integer.

function addAndSubtact(numberOne, numberTwo, lastNum) {

    function add(numOne, numTwo) {

        return numOne + numTwo;
    }
    let sum = add(numberOne, numberTwo);

    function subtract(sumOfTwoNums, lastNum) {

        return sumOfTwoNums - lastNum;
    }
    let result = subtract(sum, lastNum)

    console.log(result);
}
// addAndSubtact(23, 6, 10)
// addAndSubtact(1, 17, 30)
addAndSubtact(42, 58, 100)
