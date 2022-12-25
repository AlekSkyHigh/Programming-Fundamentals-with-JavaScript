// On the first line, you will be given a string containing all of your stops. Until you receive the command "Travel", you will be given some commands to manipulate that initial string. The commands can be:
// •	"Add Stop:{index}:{string}":
// o	Insert the given string at that index only if the index is valid
// •	"Remove Stop:{start_index}:{end_index}":
// o	Remove the elements of the string from the starting index to the end index (inclusive) if both indices are valid
// •	"Switch:{old_string}:{new_string}":
// o	If the old string is in the initial string, replace it with the new one (all occurrences)
// Note: After each command, print the current state of the string!
// After the "Travel" command, print the following: "Ready for world tour! Planned stops: {string}"

function worldTour(inputData) {

    let tour = inputData.shift();

    while (inputData[0] !== 'Travel') {

        let tokens = inputData.shift().split(":")
        let command = tokens[0];

        switch (command) {
            case 'Add Stop': {
                let index = Number(tokens[1]);
                let string = tokens[2];

                if (tour[index]) {
                    tour = tour.substring(0, index) + string + tour.substring(index);
                }
                console.log(tour);

            } break;

            case 'Remove Stop': {
                let startIndex = Number(tokens[1]);
                let endIndex = Number(tokens[2]);

                if (tour[startIndex] && tour[endIndex]) {
                    tour = tour.substring(0, startIndex) + tour.substring(endIndex + 1);
                }
                console.log(tour);

            } break;

            case 'Switch': {
                let oldString = tokens[1];
                let newString = tokens[2];

                if (tour.includes(oldString)) {
                    tour = tour.replace(oldString, newString);
                }
                console.log(tour);

            } break;
        }
    }

    console.log(`Ready for world tour! Planned stops: ${tour}`);
}

worldTour([
    "Hawai::Cyprys-Greece",
    "Add Stop:7:Rome",
    "Remove Stop:11:16",
    "Switch:Hawai:Bulgaria",
    "Travel"])

// worldTour([
//     'Albania:Bulgaria:Cyprus:Deuchland',
//     'Add Stop:3:Nigeria',
//     'Remove Stop:4:8',
//     'Switch:Albania: Azərbaycan',
//     'Travel'])    
