// Write a function that receives a string and a repeat count n. The function should return a new string (the old one repeated n times).

//Solve 1:
function repeatString(string, repeatCount) {

    let result = '';

    for (let i = 0; i < repeatCount; i++) {
        result += string;
    }
    return result;
}
let resultString = repeatString("abc", 3)
// let resultString = repeatString("String", 2)
console.log(resultString);



// Solve 2:
function repeatString(string, count) {

    console.log(string.repeat(count))
}
repeatString("abc", 3)
repeatString("String", 2)
