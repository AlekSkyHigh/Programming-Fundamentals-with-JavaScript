// Write a function that receives a string in JSON format and converts it to an object.
// Loop through all the keys and print them with their values in format: "{key}: {value}"

function convertToObject(inputString) {

    let stringToObject = JSON.parse(inputString);

    for (let key of Object.keys(stringToObject)) {

        console.log(`${key}: ${stringToObject[key]}`);
    }

}

convertToObject('{"name": "George", "age": 40, "town": "Sofia"}')

convertToObject('{"name": "Peter", "age": 35, "town": "Plovdiv"}')
