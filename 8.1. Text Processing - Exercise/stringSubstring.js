// The input will be given as two separated strings (a word as a first parameter and a text as a second).
// Write a function that checks given text for containing a given word. The comparison should be case insensitive. 
// Once you find a match, print the word and stop the program.
// If you don't find the word print: "{word} not found!

function stringSubstring(searchedWord, text) {

    let textArr = text.split(" ");

    for (let word of textArr) {

        if (searchedWord === word.toLowerCase()) {
            console.log(searchedWord);
            return;
        }
    };
    console.log(`${searchedWord} not found!`);
}
stringSubstring(
    'javascript',
    'JavaScript is the best programming language'
)

stringSubstring(
    'python',
    'JavaScript is the best programming language'
)
