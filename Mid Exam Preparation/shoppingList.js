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

