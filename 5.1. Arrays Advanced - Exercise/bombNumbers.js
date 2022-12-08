// Write a function that receives two parameters: sequence of numbers and special bomb number with a certain power. 
// Your task is to detonate every occurrence of the special bomb number and according to its power his neighbors from left and right. Detonations are performed from left to right and all detonated numbers disappear. 
// The input contains two arrays of numbers. The first contains the initial sequence and the second contains the special bomb number and its power.
// The output is the sum of the remaining elements in the sequence.

function bombNumbers(numbers, bombNumber) {

    let specialNumber = bombNumber[0];
    let power = bombNumber[1];
    let numbersLenght = numbers.length;

    for (let i = 0; i < numbersLenght; i++) {

        let currentNum = numbers[i];

        if (currentNum === specialNumber) {

            let startIndex = Math.max(0, i - power);
            let countToEnd = power * 2 + 1;

            numbers.splice(startIndex, countToEnd);
            i = i - power - 1;
        }
    }

    console.log(numbers.reduce((a, b) => a + b, 0));
}
bombNumbers(
    [1, 2, 2, 4, 2, 2, 2, 9],
    [4, 2]
)

// bombNumbers([1, 4, 4, 2, 8, 9, 1], [9, 3])

// bombNumbers([1, 7, 7, 1, 2, 3], [7, 1])

// bombNumbers([1, 1, 2, 1, 1, 1, 2, 1, 1, 1], [2, 1])
