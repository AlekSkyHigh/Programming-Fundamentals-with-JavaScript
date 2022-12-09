// Write a function that receives a first name, last name, hair color and sets them to an object.
// Convert the object to JSON string and print it.
// Input is provided as 3 single strings in the order stated above.

function convertToJson(name, lastName, hairColor) {

    let person = {
        name: name,
        lastName: lastName,
        hairColor: hairColor
    }

    console.log(JSON.stringify(person));

}
convertToJson('George', 'Jones', 'Brown')
