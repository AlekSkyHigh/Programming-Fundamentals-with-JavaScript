// Write a program that prints the next n odd numbers (starting from 1) and on the last row prints the sum of them.

function sumOfOddNumbers(n) {

    let oddNumber = 1
    let sum = 0;

    for (let i = 1; i <= n; i++) {

        console.log(oddNumber);
        sum += oddNumber;
        oddNumber += 2;
    }
    console.log(`Sum: ${sum}`);
}
sumOfOddNumbers(5)
sumOfOddNumbers(3)
