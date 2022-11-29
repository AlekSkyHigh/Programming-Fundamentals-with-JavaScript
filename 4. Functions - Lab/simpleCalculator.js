// Write a function that receives three parameters – two numbers and an operator (string) – and calculates the result depending on the operator. Operator can be 'multiply', 'divide', 'add' or 'subtract'. Try to solve this task using arrow functions.
// Bonus: Solve this task without using any conditional statements (no if or switch statements or ternary operators).

// Solve 1
function simpleCalculator(num1, num2, operation) {

    let operations = {
        "multiply": (num1, num2) => console.log(num1 * num2),
        "divide": (num1, num2) => console.log(num1 / num2),
        "add": (num1, num2) => console.log(num1 + num2),
        "subtract": (num1, num2) => console.log(num1 - num2)
    };
    return operations[operation](num1, num2);
}
simpleCalculator(5, 5, 'multiply');
simpleCalculator(40, 8, 'divide');
simpleCalculator(12, 19, 'add');
simpleCalculator(50, 13, 'subtract');


// Solve 2
function simpleCalculator(numOne, numTwo, operator) {

    let multiply = (numOne, numTwo) => console.log(numOne * numTwo);
    let divide = (numOne, numTwo) => console.log(numOne / numTwo);
    let add = (numOne, numTwo) => console.log(numOne + numTwo);
    let subtract = (numOne, numTwo) => console.log(numOne - numTwo);

    switch (operator) {
        case "multiply": return multiply(numOne, numTwo);
        case "divide": return divide(numOne, numTwo);
        case "add": return add(numOne, numTwo);
        case "subtract": return subtract(numOne, numTwo);
    }

}
simpleCalculator(5, 5, 'multiply')
simpleCalculator(40, 8, 'divide')
simpleCalculator(12, 19, 'add')
simpleCalculator(50, 13, 'subtract')


// Solve 3
function simpleCalculator(numOne, numTwo, operator) {

    let result = 0;

    switch (operator) {
        case "multiply": result = numOne * numTwo; break;
        case "divide": result = numOne / numTwo; break;
        case "add": result = numOne + numTwo; break;
        case "subtract": result = numOne - numTwo; break;
    }
    console.log(result);
    
}
simpleCalculator(5, 5, 'multiply')
simpleCalculator(40, 8, 'divide')
simpleCalculator(12, 19, 'add')
simpleCalculator(50, 13, 'subtract')


// Solve 4
function simpleCalculator(numOne, numTwo, operator) {

    function multiply(numOne, numTwo) {

        return numOne * numTwo
    }

    function divide(numOne, numTwo) {

        return numOne / numTwo
    }

    function add(numOne, numTwo) {

        return numOne + numTwo
    }

    function subtract(numOne, numTwo) {

        return numOne - numTwo
    }

    let result = 0;

    switch (operator) {
        case "multiply": result = multiply(numOne, numTwo); break;
        case "divide": result = divide(numOne, numTwo); break;
        case "add": result = add(numOne, numTwo); break;
        case "subtract": result = subtract(numOne, numTwo); break;
    }
    console.log(result);

}
simpleCalculator(5, 5, 'multiply')
simpleCalculator(40, 8, 'divide')
simpleCalculator(12, 19, 'add')
simpleCalculator(50, 13, 'subtract')

