// You will receive 3 numbers. Your task is to find their sum and print result to the console in the following format:
// `{sum} - {type of the number (Integer or Float)}`

function integerAndFloat(first, second, third) {

    let sum = first + second + third;

    sum % 1 === 0 ? console.log(`${sum} - Integer`) : console.log(`${sum} - Float`);

    // if (sum % 1 === 0) {
    //     console.log(`${sum} - Integer`);
    // } else {
    //     console.log(`${sum} - Float`);
    // }

}
integerAndFloat(9, 100, 1.1)
integerAndFloat(100, 200, 303)
