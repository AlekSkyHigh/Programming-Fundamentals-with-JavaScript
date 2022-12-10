// You're tasked to create a list of employees and their personal numbers.
// You will receive an array of strings. Each string is an employee name and to assign them a personal number you have to find the length of the name (whitespace included). 
// Try to use an object.
// At the end print all the list employees in the following format:
//  "Name: {employeeName} -- Personal Number: {personalNum}" 

function employees(inputArray) {

    let person = {};

    for (let i = 0; i < inputArray.length; i++) {

        let name = inputArray[i];
        let number = Number(name.length);

        person.name = name;
        person.number = number;

        console.log(`Name: ${name} -- Personal Number: ${number}`);
    }

}
employees([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
])
