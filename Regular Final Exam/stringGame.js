function stringGame(inputArrayStrings) {

    let theString = inputArrayStrings.shift();

    while (inputArrayStrings[0] !== "Done") {

        let tokens = inputArrayStrings.shift().split(" ");
        let command = tokens[0];

        switch (command) {

            case "Change": {
                let givenChar = tokens[1];
                let givenReplacement = tokens[2];

                if (theString.includes(givenChar)) {
                    while (theString.includes(givenChar)) {
                        theString = theString.replace(givenChar, givenReplacement);
                    }
                }
                console.log(theString);

            } break;

            case "Includes": {
                let givenSubstring = tokens[1];

                if (theString.includes(givenSubstring)) {
                    console.log("True");
                } else {
                    console.log("False");
                }

            } break;

            case "End": {
                let givenSubstring = tokens[1];

                if (theString.endsWith(givenSubstring)) {
                    console.log("True");
                } else {
                    console.log("False");
                }

            } break;

            case "Uppercase": {
                theString = theString.toUpperCase();
                console.log(theString);

            } break;

            case "FindIndex": {
                let givenChar = tokens[1];
                let index = theString.indexOf(givenChar);
                console.log(index);

            } break;

            case "Cut": {
                let givenStartIndex = Number(tokens[1]);
                let givenCount = Number(tokens[2]);

                let substring = theString.substring(givenStartIndex, givenStartIndex + givenCount);
                console.log(substring);

            } break;

        }

    }

}
stringGame(["//Th1s 1s my str1ng!//",
    "Change 1 i",
    "Includes string",
    "End my",
    "Uppercase",
    "FindIndex I",
    "Cut 5 5",
    "Done"])

// stringGame(["*S0ftUni is the B3St Plac3**",
// "Change 2 o",
// "Includes best",
// "End is",
// "Uppercase",
// "FindIndex P",
// "Cut 3 7",
// "Done"])

