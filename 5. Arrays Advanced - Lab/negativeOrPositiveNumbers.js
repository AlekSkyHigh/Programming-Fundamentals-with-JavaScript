// Write a function that processes the elements in an array one by one and produces a new array. 
// Prepend each negative element at the front of the array (as the first element) and append each positive (or 0) element at the end of the array.
// The input comes as an array of string elements holding numbers.
// The output is printed on the console, each element on a new line.

function negativeOrPositiveNumbers(arr) {

    let result = [];
    let arrLength = arr.length;

    for (let i = 0; i < arrLength; i++) {

        let currentEl = arr[i];

        if (currentEl < 0) {
            result.unshift(currentEl)
        } else {
            result.push(currentEl)
        }
    }

    console.log(result.join("\n"));
}
negativeOrPositiveNumbers(['7', '-2', '8', '9'])
negativeOrPositiveNumbers(['3', '-2', '0', '-1'])
