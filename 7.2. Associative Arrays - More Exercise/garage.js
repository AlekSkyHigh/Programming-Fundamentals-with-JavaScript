// Write a function that stores cars in garages. You will be given an array of strings. 
// Each string will contain a number of a garage and info about a car. 
// You have to store the car (with its info) in the given garage. 
// The info about the car will be in the format:
// "{key1}: {value1}, {key2}: {value2}…"
// If the garage does not exist, create it. The cars will always be unique. 
// At the end print the result in the format: 
// "Garage № {number}: --- {carOneKeyOne} - {carOneValueOne}, {carOneKeyTwo} - {carOneValueTwo}… --- {the same for the next car} Garage № {number}: …"

function garage(inputArrayStrings) {

    let garagesMap = new Map();

    for (let line of inputArrayStrings) {

        let [garage, carKeyValues] = line.split(' - ');

        if (!garagesMap.has(garage)) {
            garagesMap.set(garage, [carKeyValues]);

        } else {
            let availableCars = garagesMap.get(garage);
            availableCars.push(carKeyValues);
            garagesMap.set(garage, availableCars);
        }
    }

    let printLine = '';

    for (let [currentGarage, currentCarKeyValue] of garagesMap) {
        printLine += `Garage № ${currentGarage}\n`;

        for (let currentCarProperties of currentCarKeyValue) {
            currentCarProperties = currentCarProperties.replace(/: /g, ' - ');
            printLine += `--- ${currentCarProperties}\n`;
        }
    }

    console.log(printLine);
}
garage([
    '1 - color: blue, fuel type: diesel',
    '1 - color: red, manufacture: Audi',
    '2 - fuel type: petrol',
    '4 - color: dark blue, fuel type: diesel, manufacture: Fiat'
])
