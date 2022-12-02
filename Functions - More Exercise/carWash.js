// Write a JS function that receives some commands. Depending on the command, add or subtract a percentage of how much the car is cleaned or dirty. Start from 0. The first command will always be 'soap':
// •	soap – add 10 to the value
// •	water – increase the value by 20%
// •	vacuum cleaner – increase the value by 25%
// •	mud – decrease the value by 10%
// The input comes as an array of strings. When finished cleaning the car, print the resulting value in the format:
//              `The car is {value}% clean.`
//   Note: The value should be rounded to the second decimal point.

function carWash(inputArray) {

    let inputLength = inputArray.length;
    let percentCleaned = 0;

    for (let i = 0; i < inputLength; i++) {

        let service = inputArray[i];
        
        switch (service) {

            case "soap": percentCleaned += 10; break;
            case "vacuum cleaner": percentCleaned *= 1.25; break;
            case "mud": percentCleaned *= 0.90; break;
            case "water": percentCleaned *= 1.20; break;
        }
    }
    console.log(`The car is ${percentCleaned.toFixed(2)}% clean.`);
}
carWash(['soap', 'soap', 'vacuum cleaner', 'mud', 'soap', 'water'])
carWash(["soap", "water", "mud", "mud", "water", "mud", "vacuum cleaner"])
