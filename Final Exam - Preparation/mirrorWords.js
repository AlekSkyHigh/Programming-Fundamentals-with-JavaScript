// On the first line of the input, you will be given a text string. To win the competition, you have to find all hidden word pairs, read them, and mark the ones that are mirror images of each other.
// First of all, you have to extract the hidden word pairs. Hidden word pairs are:
// •	Surrounded by "@" or "#" (only one of the two) in the following pattern #wordOne##wordTwo# or @wordOne@@wordTwo@
// •	At least 3 characters long each (without the surrounding symbols)
// •	Made up of letters only
// If the second word, spelled backward, is the same as the first word and vice versa (casing matters!), they are a match, and you have to store them somewhere. Examples of mirror words: 
// #Part##traP# @leveL@@Level@ #sAw##wAs#
// •	If you don`t find any valid pairs, print: "No word pairs found!"
// •	If you find valid pairs print their count: "{valid pairs count} word pairs found!"
// •	If there are no mirror words, print: "No mirror words!"
// •	If there are mirror words print:
// "The mirror words are:
// {wordOne} <=> {wordtwo}, {wordOne} <=> {wordtwo}, … {wordOne} <=> {wordtwo}"

function mirrorWords(input) {

    let pattern = /([@#])(?<word1>[A-Za-z]{3,})\1{2}(?<word2>[A-Za-z]{3,})\1/gm;

    let mirrorWords = [];
    let wordPairsCounter = 0;

    let exec = pattern.exec(input);

    while (exec) {

        let word1 = exec.groups['word1']
        let word2 = exec.groups['word2']
        wordPairsCounter++;

        let word2Reversed = word2.split("").reverse().join("");

        if (word1 === word2Reversed) {
            mirrorWords.push(word1 + " <=> " + word2);
        }

        exec = pattern.exec(input);
    }

    if (wordPairsCounter === 0) {
        console.log(`No word pairs found!`);
    } else {
        console.log(`${wordPairsCounter} word pairs found!`);
    }

    if (mirrorWords.length === 0) {
        console.log(`No mirror words!`);
    } else {
        console.log(`The mirror words are:`);
        console.log(mirrorWords.join(', '));
    }

}
mirrorWords([
    '@mix#tix3dj#poOl##loOp#wl@@bong&song%4very$long@thong#Part##traP##@@leveL@@Level@##car#rac##tu@pack@@ckap@#rr#sAw##wAs#r#@w1r'
])

// mirrorWords([ '#po0l##l0op# @bAc##cAB@ @LM@ML@ #xxxXxx##xxxXxx# @aba@@ababa@' ])

// mirrorWords(['#lol#lol# @#God@@doG@# #abC@@Cba# @Xyu@#uyX#'])
