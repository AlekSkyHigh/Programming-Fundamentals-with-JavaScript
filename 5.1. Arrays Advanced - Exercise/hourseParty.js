// Write a function that keeps track of guests that are going to a house party.
// You will be given an array of strings. Each string will be one of the following:
// -	"{name} is going!"
// -	"{name} is not going!"
// If you receive the first type of input, you have to add the person if he/she is not in the list (If he/she is in the list print: "{name} is already in the list!").
// If you receive the second type of input, you have to remove the person if he/she is in the list (if not print: "{name} is not in the list!"). 
// At the end print all the guests each on a separate line.

function hourseParty(arr) {

    let guestList = [];

    for (let i = 0; i < arr.length; i++) {

        let currentInput = arr[i].split(' ');

        if (currentInput.length === 3) {

            if (!guestList.includes(currentInput[0])) {
                guestList.push(currentInput[0]);
            } else {
                console.log(`${currentInput[0]} is already in the list!`);
            }

        } else {

            if (!guestList.includes(currentInput[0])) {
                console.log(`${currentInput[0]} is not in the list!`);
            } else {
                let index = guestList.indexOf(currentInput[0]);
                guestList.splice(index, 1);
            }
        }

    }

    console.log(guestList.join("\n"));

}
hourseParty([
    'Allie is going!',
    'George is going!',
    'John is not going!',
    'George is not going!'
])

// hourseParty([
//     'Tom is going!',
//     'Annie is going!',
//     'Tom is going!',
//     'Garry is going!',
//     'Jerry is going!'
// ])
