// You have initial health 100 and initial bitcoins 0. You will be given a string representing the dungeon's rooms. Each room is separated with '|' (vertical bar): "room1|room2|room3…"
// Each room contains a command and a number, separated by space. The command can be:
// •	"potion"
// o	You are healed with the number in the second part. But your health cannot exceed your initial health (100).
// o	First print: "You healed for {amount} hp."
// o	After that, print your current health: "Current health: {health} hp."
// •	"chest"
// o	You've found some bitcoins, the number in the second part.
// o	Print: "You found {amount} bitcoins."
// •	In any other case, you are facing a monster, which you will fight. The second part of the room contains the attack of the monster. You should remove the monster's attack from your health. 
// o	If you are not dead (health <= 0), you've slain the monster, and you should print: "You slayed {monster}."
// o	If you've died, print "You died! Killed by {monster}." and your quest is over. Print the best room you've manage to reach: "Best room: {room}"
// If you managed to go through all the rooms in the dungeon, print on the following three lines: 
// "You've made it!"
// "Bitcoins: {bitcoins}"
// "Health: {health}"

function muOnline (rooms) {

    let health = 100;
    let bitcoins = 0;
    let roomsCounter = 0;
    let splitedRooms = rooms.split("|");
    let index = 0;
    let command = splitedRooms[index];
    index++;

    while (roomsCounter < splitedRooms.length) {

        let currentRoom = command.split(" ")
        roomsCounter++;
        let string = currentRoom[0];
        let number = Number(currentRoom[1]);

        if (string === "potion") {
            if (health + number > 100) {
                number = 100 - health;
                health = 100;
            } else {
                health += number;
            }
            console.log(`You healed for ${number} hp.`);
            console.log(`Current health: ${health} hp.`);

        } else if (string === "chest") {
            bitcoins += number;
            console.log(`You found ${number} bitcoins.`);

        } else {
            health -= number;
            if (health > 0) {
                console.log(`You slayed ${string}.`);
            } else {
                console.log(`You died! Killed by ${string}.`);
                console.log(`Best room: ${roomsCounter}`);
                return;
            }
        }
        command = splitedRooms[index];
        index++;
    }
    console.log("You've made it!");
    console.log(`Bitcoins: ${bitcoins}`);
    console.log(`Health: ${health}`);
}
// muOnline("rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000")
muOnline("cat 10|potion 30|orc 10|chest 10|snake 25|chest 110")
