// Write a function, which receives two parameters.
// The first parameter will be a string with some words separated by ', '.
// The second parameter will be a string that contains templates containing '*'.
// Find the word with the same length as the template and replace it.

//Solve 1 of 2:
function revealWords(words, sentence) {

    let wordsArray = words.split(", ");
    let sentenceArray = sentence.split(" ");

    for (let word of sentenceArray) {

        if (word.startsWith("*")) {

            for (words of wordsArray) {
                
                if (word.length === words.length) {
                    sentenceArray.splice(sentenceArray.indexOf(word), 1, words);
                }
            }
        }
    };
    console.log(sentenceArray.join(" "));
}

revealWords(
    'great, learning',
    'softuni is ***** place for ******** new programming languages'
)

revealWords(
    'great',
    'softuni is ***** place for learning new programming languages'
)


// Solve 2 of 2:
// Write a function, which receives two parameters.
// The first parameter will be a string with some words separated by ', '.
// The second parameter will be a string that contains templates containing '*'.
// Find the word with the same length as the template and replace it.

function revealWords(words, sentence) {

    let wordsArray = words.split(", ");

    wordsArray.forEach(word => {
        let match = '*'.repeat(word.length);
        sentence = sentence.replace(match, word);
    });

    console.log(sentence);
}

revealWords(
    'great, learning',
    'softuni is ***** place for ******** new programming languages'
)

revealWords(
    'great',
    'softuni is ***** place for learning new programming languages'
)
