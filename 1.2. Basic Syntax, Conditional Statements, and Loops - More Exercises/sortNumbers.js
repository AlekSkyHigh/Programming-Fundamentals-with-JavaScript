// Receive three numbers and you have to sort them in descending order. Print each number on a new line.

function sortNumbers(firstNumber, secondNumber, thirdNumber) {

    if (firstNumber > secondNumber && firstNumber > thirdNumber) {
        console.log(firstNumber);

        if (secondNumber > thirdNumber) {
            console.log(secondNumber);
            console.log(thirdNumber);
        } else {
            console.log(thirdNumber);
            console.log(secondNumber);
        }

    } else if (secondNumber > firstNumber && secondNumber > thirdNumber) {
        console.log(secondNumber);

        if (firstNumber > thirdNumber) {
            console.log(firstNumber);
            console.log(thirdNumber);
        } else {
            console.log(thirdNumber);
            console.log(firstNumber);
        }

    } else if (thirdNumber > firstNumber && thirdNumber > secondNumber) {
        console.log(thirdNumber);

        if (firstNumber > secondNumber) {
            console.log(firstNumber);
            console.log(secondNumber);
        } else {
            console.log(secondNumber);
            console.log(firstNumber);
        }

    }

}
sortNumbers(2, 1, 3)
// sortNumbers(-2, 1 , 3)
// sortNumbers(0, 0, 2)
