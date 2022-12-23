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
