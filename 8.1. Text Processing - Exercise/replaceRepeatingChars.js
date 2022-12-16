// Write a function that receives a single string 
// and replace any sequence of the same letters with a single corresponding letter.

function replaceRepeatingChars(string) {

    let result = string[0];

    for (let index = 1; index < string.length; index++) {

        let current = string[index];
        let previous = string[index - 1];

        if (current !== previous) {
            result += current;
        }
    };
    console.log(result);

}
replaceRepeatingChars('aaaaabbbbbcdddeeeedssaa')

replaceRepeatingChars('qqqwerqwecccwd')
