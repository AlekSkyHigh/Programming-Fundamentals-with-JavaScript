// The input will be a single string.
// Find all special words starting with #. 
// If the found special word does not consist only of letters, then it is invalid and should not be printed.
// Finally, print out all the special words you found without the label (#) on a new line.

function modernTimesOfHashtag(string) {

    let words = string.split(" ");

    words.forEach(word => {
        const isValidWord = word.startsWith("#") && word.length > 1;

        if (isValidWord) {
            let isLetter = true;
            let wordCopy = '';

            for (let index = 1; index < word.length; index++) {
                const char = word[index].toLowerCase();

                if (char.charCodeAt() < 97 || char.charCodeAt() > 122) {
                    isLetter = false;
                    break;
                } else {
                    wordCopy += word[index];
                }
            }

            if (isLetter) {
                console.log(wordCopy);
            }
        }
    });
}
modernTimesOfHashtag('Nowadays everyone uses # to tag a #special word in #socialMedia')

modernTimesOfHashtag('The symbol # is known #variously in English-speaking #regions as the #number sign')
