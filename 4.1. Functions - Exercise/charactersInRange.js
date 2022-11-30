// Write a function that receives two characters and prints on a single line all the characters in between them according to the ASCII code. 
// Keep in mind that the second character code might be before the first one inside the ASCII table.

function charactersInRange(start, end) {

    let startingChar = Math.min(start.charCodeAt(), end.charCodeAt());
    let endingChar = Math.max(start.charCodeAt(), end.charCodeAt());
    let result = [];

    for (let i = startingChar + 1; i < endingChar; i++) {

        let currentChar = String.fromCharCode(i);

        result.push(currentChar);
    }

    console.log(result.join(" "));
}
charactersInRange('a', 'd')
charactersInRange('#', ':')
charactersInRange('C', '#')
