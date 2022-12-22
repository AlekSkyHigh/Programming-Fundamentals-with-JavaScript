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
