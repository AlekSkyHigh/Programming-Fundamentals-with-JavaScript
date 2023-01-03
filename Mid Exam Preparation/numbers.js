// Write a program to read a sequence of integers and find and print the top 5 numbers greater than the average value in the sequence, sorted in descending order.
// Input
// •	Read from the console a single line holding space-separated integers.
// Output
// •	Print the above-described numbers on a single line, space-separated. 
// •	If less than 5 numbers hold the property mentioned above, print less than 5 numbers. 
// •	Print "No" if no numbers hold the above property.
// Constraints
// •	All input numbers are integers in the range [-1 000 000 … 1 000 000]. 
// •	The count of numbers is in the range [1…10 000].

// Solve 1 of 2:
function numbers(input) {

    let inputArray = input.split(" ").map(Number)
    let sum = 0;
    let resultArr = [];

    for (let num of inputArray) {
        sum += num;
    }

    let average = Number((sum / inputArray.length).toFixed(2));

    for (let num of inputArray) {

        if (num > average) {
            resultArr.push(num)
        }
    }

    if (resultArr.length > 0) {
        let printLine = resultArr.sort((a, b) => b - a);
        console.log(printLine.slice(0, 5).join(" "));
    } else {
        console.log("No");
    }

}
numbers('10 20 30 40 50')
numbers('5 2 3 4 -10 30 40 50 20 50 60 60 51')
numbers('1')
numbers('-1 -2 -3 -4 -5 -6')


// Solve 2 of 2:
function numbers(input) {

    let inputArray = input.split(" ").map(Number)
    let sum = 0;
    inputArray.map((num) => sum += num);

    let average = Number(sum / inputArray.length).toFixed(2);
    let numsHigherThanAverage = inputArray.filter((num) => num > average).sort((a, b) => b - a);
    let topNumbers = numsHigherThanAverage.filter((num, i) => i < 5);

    if (numsHigherThanAverage.length > 0) {
        console.log(topNumbers.join(' '));
    } else {
        console.log("No");
    }

}
numbers('10 20 30 40 50')
numbers('5 2 3 4 -10 30 40 50 20 50 60 60 51')
numbers('1')
numbers('-1 -2 -3 -4 -5 -6')
