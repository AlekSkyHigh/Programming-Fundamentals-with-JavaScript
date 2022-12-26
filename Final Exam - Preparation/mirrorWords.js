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
