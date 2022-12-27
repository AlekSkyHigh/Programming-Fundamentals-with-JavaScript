function friendListMaintenance(inputArray) {

    let friendsList = inputArray.shift().split(", ");

    let index = 0;
    let command = inputArray[index].split(" ");
    index++;

    let action = command[0];
    let name = command[1];
    let inIndex = Number(command[1]);


    let blacklistedNames = 0;
    let lostNames = 0;

    while (action !== "Report") {

        switch (action) {
            case "Blacklist":
                let index = friendsList.indexOf(name);
                if (index !== -1) {
                    friendsList.splice(index, 1, "Blacklisted");
                    blacklistedNames++;
                    console.log(`${name} was blacklisted.`);
                } else {
                    console.log(`${name} was not found.`);
                }
                break;

            case "Error":
                if (friendsList[inIndex]) {
                    if (friendsList[inIndex] !== "Blacklisted" && friendsList[inIndex] !== "Lost") {
                        let oldName = friendsList[inIndex];
                        friendsList.splice(inIndex, 1, "Lost");
                        lostNames++;
                        console.log(`${oldName} was lost due to an error.`);
                    }
                }
                break;

            case "Change":
                let newName = command[2];
                if (friendsList[inIndex]) {
                    let currentName = friendsList[inIndex];
                    friendsList.splice(inIndex, 1, `${newName}`);
                    console.log(`${currentName} changed his username to ${newName}.`);
                }
                break;

        }

        command = inputArray[index].split(" ");
        action = command[0];
        name = command[1];
        inIndex = Number(command[1]);
        index++;
    }

    console.log(`Blacklisted names: ${blacklistedNames}`);
    console.log(`Lost names: ${lostNames}`);
    console.log(friendsList.join(" "));

}
// friendListMaintenance([
//     "Mike, John, Eddie",
//     "Blacklist Mike",
//     "Error 0",
//     "Report"
// ])

// friendListMaintenance([
//     "Mike, John, Eddie, William",
//     "Error 3",
//     "Error 3",
//     "Change 0 Mike123",
//     "Report"
// ])

friendListMaintenance([
    "Mike, John, Eddie, William",
    "Blacklist Maya",
    "Error 1",
    "Change 4 George",
    "Report"
])


