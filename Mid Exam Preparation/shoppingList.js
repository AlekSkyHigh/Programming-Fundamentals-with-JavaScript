// It's the end of the week, and it is time for you to go shopping, so you need to create a shopping list first.
// Input
// You will receive an initial list with groceries separated by an exclamation mark "!".
// After that, you will be receiving 4 types of commands until you receive "Go Shopping!".
// •	"Urgent {item}" - add the item at the start of the list.  If the item already exists, skip this command.
// •	"Unnecessary {item}" - remove the item with the given name, only if it exists in the list. Otherwise, skip this command.
// •	"Correct {oldItem} {newItem}" - if the item with the given old name exists, change its name with the new one. Otherwise, skip this command.
// •	"Rearrange {item}" - if the grocery exists in the list, remove it from its current position and add it at the end of the list. Otherwise, skip this command.
// Constraints
// •	There won't be any duplicate items in the initial list
// Output
// •	Print the list with all the groceries, joined by ", ":
// "{firstGrocery}, {secondGrocery}, … {nthGrocery}"

function shoppingList(inputArray) {

    let shoppingList = inputArray.shift().split("!");
    let currentLine = inputArray.shift();

    while (currentLine !== "Go Shopping!") {

        let splitedLine = currentLine.split(" ")
        let command = splitedLine[0];
        let itemOne = splitedLine[1];
        let itemTwo = splitedLine[2];

        switch (command) {
            case "Urgent":
                if (!shoppingList.includes(itemOne)) {
                    shoppingList.unshift(itemOne);
                }
                break;
            case "Unnecessary":
                shoppingList = shoppingList.filter(item => item !== itemOne);
                break;
            case "Correct":
                let itemOneIndex = shoppingList.indexOf(itemOne);
                if (itemOneIndex > -1) {
                    shoppingList[itemOneIndex] = itemTwo;
                }
                break;
            case "Rearrange":
                let itemToRemove = shoppingList.indexOf(itemOne);
                if (itemToRemove > -1) {
                    let removedItem = shoppingList[itemToRemove];
                    shoppingList.splice(itemToRemove, 1);
                    shoppingList.push(removedItem);
                }
                break;
        }
        currentLine = inputArray.shift()
    }
    console.log(shoppingList.join(", "));
}
shoppingList([
    "Tomatoes!Potatoes!Bread",
    "Unnecessary Milk",
    "Urgent Tomatoes",
    "Go Shopping!"
])

shoppingList(["Milk!Pepper!Salt!Water!Banana",
    "Urgent Salt",
    "Unnecessary Grapes",
    "Correct Pepper Onion",
    "Rearrange Grapes",
    "Correct Tomatoes Potatoes",
    "Go Shopping!"])

