// Write a function that receives a text and a single word that you need to search. 
// Print the number of all occurrences of this word in the text.

function countStringOccurrences(string, searchedWord) {

    let splitedString = string.split(" ");
    let counter = 0;

    for (let word of splitedString) {

        if (word === searchedWord) {
            counter++;
        }
    }
    console.log(counter);
}
countStringOccurrences(
    'This is a word and it also is a sentence',
    'is'
)

countStringOccurrences(
    'softuni is great place for learning new programming languages',
    'softuni'
)
