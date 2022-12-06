// You are given an array of numbers. Write a function that prints the elements at odd positions from the array, doubled and in reverse order.
// The input comes as an array of number elements.
// The output is printed on the console on a single line, separated by space.

//Solve 1:
function processOddNumbers(arr) {

    let result = [];

    for (let i = 0; i < arr.length; i++) {

        let currentEl = arr[i];

        if (i % 2 !== 0) {
            result.push(currentEl * 2);
        }
    }
    console.log(result.reverse().join(" "));

}
processOddNumbers([10, 15, 20, 25])
processOddNumbers([3, 0, 10, 4, 7, 3])


//Solve 2:
function processOddNumbers(arr) {

    let result = arr.filter((_, i) => i % 2 !== 0)
        .map(num => num * 2)
        .reverse()
        .join(" ")

    console.log(result);

}
processOddNumbers([10, 15, 20, 25])
processOddNumbers([3, 0, 10, 4, 7, 3])
