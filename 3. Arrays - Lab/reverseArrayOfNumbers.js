// Write a program, which receives a number n and an array of elements. Your task is to create a new array with n numbers from the original array, reverse it and print its elements on a single line, space-separated.

function reverseArrayOfNumbers(n, inputArr) {

    let result = [];
  
    for (let i = 0; i < n; i++) {
        result[i] = inputArr[n - 1 - i];
    }
    console.log(result.join(" "));

    // how to print it without .join():
    
    // print = "";
    // for(let i = 0; i < result.length - 1; i++) {
    //        print += result[i];
    //        if(i < result.length - 1) {
    //              print += ' ';
    //          }
    // }
    //      console.log(print)
}
reverseArrayOfNumbers(3, [10, 20, 30, 40, 50])
reverseArrayOfNumbers(4, [-1, 20, 99, 5])
reverseArrayOfNumbers(2, [66, 43, 75, 89, 47])

//another solving:
function reverseArrayOfNumbers(n, inputArr) {

    let arr = [];
    let output = '';

    for (let i = 0; i < n; i++) {
        arr.push(inputArr[i]);
    }
    for (let j = arr.length - 1; j >= 0; j--) {
        output += `${arr[j]} `;
    }
    console.log(output);
}
reverseArrayOfNumbers(3, [10, 20, 30, 40, 50])
reverseArrayOfNumbers(4, [-1, 20, 99, 5])
reverseArrayOfNumbers(2, [66, 43, 75, 89, 47])
