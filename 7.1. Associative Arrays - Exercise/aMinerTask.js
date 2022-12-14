// You are given an array of strings. Every odd string is representing a resource (e.g. Gold, Silver, Copper, and so on), 
// and every even – quantity. Your task is to collect the resources and print them each on a new line. 

function aMinerTask(inputArrayStrings) {

    let result = {};

    for (let index = 0; index < inputArrayStrings.length; index += 2) {

        const resource = inputArrayStrings[index];
        const quantity = Number(inputArrayStrings[index + 1])

        if (!result.hasOwnProperty(resource)) {
            result[resource] = 0;
        }
        result[resource] += quantity;
    };

    for (const key in result) {
        console.log(`${key} -> ${result[key]}`);
    };

}
aMinerTask([
    'Gold',
    '155',
    'Silver',
    '10',
    'Copper',
    '17'
])

aMinerTask([
    'gold',
    '155',
    'silver',
    '10',
    'copper',
    '17',
    'gold',
    '15'
])
