// Write a program that receives a string of number n and print all triples of the first n small Latin letters, ordered alphabetically:

function tripletsOfLatinLetters(number) {

    for (let i = 0; i < number; i++) {
        let firstLetter = String.fromCharCode(i + 97);

        for (let j = 0; j < number; j++) {
            let secondLetter = String.fromCharCode(j + 97);

            for (let l = 0; l < number; l++) {
                let thirdLetter = String.fromCharCode(l + 97);

                console.log(`${firstLetter}${secondLetter}${thirdLetter} `);

            }
        }
    }

}
// tripletsOfLatinLetters('3')
tripletsOfLatinLetters(2)
