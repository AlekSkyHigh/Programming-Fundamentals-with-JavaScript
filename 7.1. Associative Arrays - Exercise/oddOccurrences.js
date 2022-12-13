// Write a function that extracts the elements of a sentence, if it appears an odd number of times (case-insensitive).
// The input comes as a single string. The words will be separated by a single space.

function oddOccurrences(inputArrayString) {

    let words = inputArrayString
        .split(" ")
        .map(word => word.toLowerCase());

    let resultObject = {};

    for (let word of words) {

        if (!resultObject.hasOwnProperty(word)) {
            resultObject[word] = 0;
        }
        resultObject[word]++;
    };

    let printLine = "";

    for (const word of words) {
        
        if (resultObject[word] % 2 !== 0) {
            printLine += `${word} `
        }
    };

    let splitedPrintLine = printLine.split(" ");
    let uniqueValues = new Set(splitedPrintLine);
    let finalResult = [];

    for(let word of uniqueValues){
        finalResult.push(word)
    };

    console.log(finalResult.join(" "));
}

oddOccurrences('Java C# Php PHP Java PhP 3 C# 3 1 5 C#')

oddOccurrences('Cake IS SWEET is Soft CAKE sweet Food')
