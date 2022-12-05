// Write a function that calculates and prints the sum of the first and the last elements in an array.
// The input comes as an array of string elements holding numbers.
// The output is printed on the console.

function sumFirstAndLast(arr) {

    let firstEl = Number(arr.shift());
    let lastEl = Number(arr.pop());

    console.log(firstEl + lastEl);
}
sumFirstAndLast(['20', '30', '40'])
sumFirstAndLast(['5', '10'])
