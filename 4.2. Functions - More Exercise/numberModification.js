// Write a JS program that changes a number until the average of all its digits is not higher than 5. To modify the number, your program should append a 9 to the end of the number, when the average value of all its digits is higher than 5 the program should stop appending. 
// The input is a single number.
// The output should consist of a single number - the final modified number which has an average value of all its digits higher than 5. The output should be printed on the console.

function numberModification(number) {

    let numToString = number.toString()
    let sum = 0;
    let numCounter = 0;
    let average = 0;

    while (average < 5) {

        for (let i = 0; i < numToString.length; i++) {

            let current = Number(numToString[i]);
            numCounter++;
            sum += current;

        }
        average = sum / numCounter;

        if (average <= 5) {
            numToString += "9";
            sum = 0;
            numCounter = 0;
        }

    }
    console.log(numToString);

}
numberModification(101)
numberModification(5835)
