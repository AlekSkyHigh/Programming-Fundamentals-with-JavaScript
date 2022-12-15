// Write a function that receives a text as a first parameter and a single word as a second. 
// Find all occurrences of that word in the text and replace them with the corresponding count of '*'.

function censoredWords(text, word) {

    let censored = text.replace(word, repeat(word));

    while (censored.includes(word)) {

        censored = censored.replace(word, repeat(word));
    };

    function repeat(word) {

        let wordLength = word.length;

        return '*'.repeat(wordLength)
    };

    console.log(censored);
}

censoredWords(
    'A small sentence with some words',
    'small'
)

censoredWords('Find the hidden word', 'hidden')
