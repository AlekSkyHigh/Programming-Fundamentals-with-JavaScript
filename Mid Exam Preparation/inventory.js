// As a young traveler, you gather items and craft new items.
// You will receive a journal with some collecting items, separated with a comma and a space (", "). After that, until receiving "Craft!" you will be receiving different commands split by " - ":
// •	"Collect - {item}" - you should add the given item to your inventory. If the item already exists, you should skip this line.
// •	"Drop - {item}" - you should remove the item from your inventory if it exists.
// •	"Combine Items - {old_item}:{new_item}" - you should check if the old item exists. If so, add the new item after the old one. Otherwise, ignore the command.
// •	"Renew – {item}" – if the given item exists, you should change its position and put it last in your inventory.
// Output
// After receiving "Craft!" print the items in your inventory, separated by ", ".

function inventory(inputArray) {

    let inventory = inputArray.shift().split(", ");
    let command = inputArray.shift();

    while (command !== 'Craft!') {

        let splitedCommand = command.split(" - ");
        let action = splitedCommand[0];
        let itemOne = splitedCommand[1];

        switch (action) {
            case "Collect":
                if (!inventory.includes(itemOne)) {
                    inventory.push(itemOne)
                }
                break;
            case "Drop":
                inventory = inventory.filter(item => item !== itemOne);
                break;
            case "Combine Items":
                itemOne = itemOne.split(":");
                let oldItem = itemOne[0];
                let newItem = itemOne[1];
                if (inventory.includes(oldItem)) {
                    let index = inventory.indexOf(oldItem);
                    inventory.splice(index + 1, 0, newItem);
                }
                break;
            case "Renew":
                if (inventory.includes(itemOne)) {
                    inventory = inventory.filter(item => item !== itemOne);
                    inventory.push(itemOne);
                }
                break;
        }
        command = inputArray.shift();
    }
    console.log(inventory.join(", "));
}
inventory([
    'Iron, Wood, Sword',
    'Collect - Gold',
    'Drop - Wood',
    'Craft!'
])

inventory([
    'Iron, Sword',
    'Drop - Bronze',
    'Combine Items - Sword:Bow',
    'Renew - Iron',
    'Craft!'
])
