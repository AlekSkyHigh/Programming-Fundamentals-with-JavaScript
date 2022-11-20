// Write a function that prints whether a given character is upper-case or lower-case.

function lowerOrUpper(char) {

    if (char === char.toUpperCase()) {
        console.log(`upper-case`);
    } else {
        console.log(`lower-case`);
    }

}
lowerOrUpper('L')
lowerOrUpper('f')


//ДРУГО РЕШЕНИE, с ASCI и For LOOP:

// function lowerOrUpper(char) {

//     let asciValue = char.charCodeAt();

//     if (asciValue >= 65 && asciValue <= 90) {

//         console.log("upper-case");

//     } else {

//         console.log("lower-case");

//     }

// }
// lowerOrUpper("S")
