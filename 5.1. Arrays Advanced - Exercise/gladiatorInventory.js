// As a gladiator, Peter has a cool Inventory. He loves to buy new equipment. You are given Peter’s inventory with all of his equipment -> strings, separated by whitespace. 
// You may receive the following commands:
// •	Buy {equipment}
// •	Trash {equipment}
// •	Repair {equipment}
// •	Upgrade {equipment}-{upgrade}
// If you receive the Buy command, you should add the equipment at the last position in the inventory, but only if it isn't bought already.
// If you receive the Trash command, delete the equipment if it exists.
// If you receive the Repair command, you should repair the equipment if it exists and place it in the last position.
// If you receive the Upgrade command, you should check if the equipment exists and insert after it the upgrade in the following format: "{equipment}:{upgrade}".

function gladiatorInventory(inputArray) {

    let petersEquipment = inputArray.shift().split(" ");

    for (let i = 0; i < inputArray.length; i++) {

        let command = inputArray[i].split(" ");
        let action = command[0];
        let equipment = command[1];

        if (action === "Buy") {
            if (!petersEquipment.includes(equipment)) {
                petersEquipment.push(equipment);
            }
        } else if (action === "Trash") {
            if (petersEquipment.includes(equipment)) {
                petersEquipment = petersEquipment.filter(el => el !== equipment);
            }
        } else if (action === "Repair") {
            if (petersEquipment.includes(equipment)) {
                petersEquipment = petersEquipment.filter(elm => elm !== equipment);
                petersEquipment.push(equipment);
            }
        } else if (action === "Upgrade") {
            equipment = equipment.split("-");

            if (petersEquipment.includes(equipment[0])) {
                let index = petersEquipment.indexOf(equipment[0]);
                petersEquipment.splice(index + 1, 0, (`${equipment[0]}:${equipment[1]}`));
            }

        }
    }
    console.log(petersEquipment.join(" "));
}
gladiatorInventory(
    ['SWORD Shield Spear',
        'Buy Bag',
        'Trash Shield',
        'Repair Spear',
        'Upgrade SWORD-Steel']
)

gladiatorInventory(
    ['SWORD Shield Spear',
        'Trash Bow',
        'Repair Shield',
        'Upgrade Helmet-V']
)
