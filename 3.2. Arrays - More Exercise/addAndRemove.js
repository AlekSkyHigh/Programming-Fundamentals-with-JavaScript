// Write a function that adds and removes numbers to/from an array. You will receive a command, which can either be "add" or "remove". 
// The initial number is 1. Each input command should increase that number, regardless of what it is.
// •	Upon receiving an "add" command, you should add the current number to your array.
// •	 Upon receiving the "remove" command, you should remove the last entered number, currently existent in the array.

function addAndRemove(input) {

    let result = [];
    let counter = 0;

    for (let i = 0; i < input.length; i++) {

        let command = input[i];

        if (command === 'add') {

            counter += 1;
            result.push(counter);
            
        } else if (command === 'remove') {

            result.pop();
            counter += 1;
        }
    }

    if (result.length <= 0) {
        console.log(`Empty`); return;
    } else {
        console.log(result.join(' '));
    }
}
addAndRemove(['add', 'add', 'add', 'add'])
addAndRemove(['add', 'add', 'remove', 'add', 'add'])
addAndRemove(['remove', 'remove', 'remove'])
addAndRemove(['add', 'remove'])
