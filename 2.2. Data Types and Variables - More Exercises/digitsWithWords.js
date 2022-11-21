// Write a function that receives a digit in the form of a word (as a string) and prints the digit (as a number).

function digitsWithWords(string) {

    switch (string) {
        case "zero": console.log(0); break;
        case "one": console.log(1); break;
        case "two": console.log(2); break;
        case "three": console.log(3); break;
        case "four": console.log(4); break;
        case "five": console.log(5); break;
        case "six": console.log(6); break;
        case "seven": console.log(7); break;
        case "eight": console.log(8); break;
        case "nine": console.log(9); break;
    };

}
digitsWithWords('nine')
digitsWithWords('two')
digitsWithWords('zero')
