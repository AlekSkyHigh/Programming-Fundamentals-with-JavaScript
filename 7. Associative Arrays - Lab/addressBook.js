// Write a function that stores information about a person’s name and his address. 
// The input comes as an array of strings. Each string contains the name and the address separated by a colon. 
// If you receive the same name twice just replace the address. In the end, print the full list, sorted alphabetically by the person’s name.

function addressBook(inputStrings) {

    let addressBook = {};

    for (let line of inputStrings) {

        let [name, adress] = line.split(":");
        addressBook[name] = adress;
    }

    let adreesBookArr = Object.entries(addressBook);

    let sortedAdressBook = adreesBookArr.sort(([nameA], [nameB]) => nameA.localeCompare(nameB));

    for (let pair of sortedAdressBook) {
        console.log(`${pair[0]} -> ${pair[1]}`);
    }

}
addressBook([
    'Tim:Doe Crossing',
    'Bill:Nelson Place',
    'Peter:Carlyle Ave',
    'Bill:Ornery Rd'
])

addressBook([
    'Bob:Huxley Rd',
    'John:Milwaukee Crossing',
    'Peter:Fordem Ave',
    'Bob:Redwing Ave',
    'George:Mesta Crossing',
    'Ted:Gateway Way',
    'Bill:Gateway Way',
    'John:Grover Rd',
    'Peter:Huxley Rd',
    'Jeff:Gateway Way',
    'Jeff:Huxley Rd'
])
