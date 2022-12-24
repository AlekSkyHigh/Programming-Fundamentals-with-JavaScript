// Write a password reset program that performs a series of commands upon a predefined string. First, you will receive a string, and afterward, until the command "Done" is given, you will be receiving strings with commands split by a single space. The commands will be the following:
// •	"TakeOdd"
// o	 Takes only the characters at odd indices and concatenates them to obtain the new raw password and then prints it.
// •	"Cut {index} {length}"
// o	Gets the substring with the given length starting from the given index from the password and removes its first occurrence, then prints the password on the console.
// o	The given index and the length will always be valid.
// •	"Substitute {substring} {substitute}"
// o	If the raw password contains the given substring, replaces all of its occurrences with the substitute text given and prints the result.
// o	If it doesn't, prints "Nothing to replace!".

function passwordReset(input) {

    let rawPassword = input.shift();

    while (input[0] !== "Done") {

        let tokens = input.shift().split(" ");
        let command = tokens[0];

        switch (command) {
            case "TakeOdd": {
                let updatedRawPassword = ""
                for (let index = 0; index < rawPassword.length; index++) {
                    let currentChar = rawPassword[index];
                    if (index % 2 !== 0) {
                        updatedRawPassword += currentChar;
                    }
                }
                rawPassword = updatedRawPassword;
                console.log(rawPassword);
            } break;

            case "Cut": {
                let index = Number(tokens[1]);
                let length = Number(tokens[2]);

                let substring1 = rawPassword.substring(0, index);
                let substring2 = rawPassword.substring(index + length);
                rawPassword = substring1 + substring2;
                console.log(rawPassword);
            } break;

            case "Substitute": {
                let substring = tokens[1];
                let substitute = tokens[2];

                if (rawPassword.includes(substring)) {
                    while (rawPassword.includes(substring)) {
                        rawPassword = rawPassword.replace(substring, substitute);
                    }
                    console.log(rawPassword);
                } else {
                    console.log(`Nothing to replace!`);
                }
            } break;
        }
    }

    console.log(`Your password is: ${rawPassword}`);
}
passwordReset([
    "Siiceercaroetavm!:?:ahsott.:i:nstupmomceqr",
    "TakeOdd",
    "Cut 15 3",
    "Substitute :: -",
    "Substitute | ^",
    "Done"
])

// passwordReset([
//     "up8rgoyg3r1atmlmpiunagt!-irs7!1fgulnnnqy",
//     "TakeOdd",
//     "Cut 18 2",
//     "Substitute ! ***",
//     "Substitute ? .!.",
//     "Done"
// ])
