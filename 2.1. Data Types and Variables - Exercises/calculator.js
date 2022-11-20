// Write a function that receives 3 parameters: a number, an operator (string), and another number.
// The operator can be:  '+', '-', '/', '*'. Print the result of the calculation on the console formatted to the second decimal point.

function calculator(firstNumber, operator, secondNumber) {

    switch (operator) {
        case "+": console.log((firstNumber + secondNumber).toFixed(2)); break;
        case "-": console.log((firstNumber - secondNumber).toFixed(2)); break;
        case "/": console.log((firstNumber / secondNumber).toFixed(2)); break;
        case "*": console.log((firstNumber * secondNumber).toFixed(2)); break;
    }

}
calculator(5, '+', 10)
calculator(25.5, '-', 3)
