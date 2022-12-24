// Solve 1 of 2:
function theImitationGame(inputArrayStrings) {

    let inputCopy = inputArrayStrings.slice();
    let secretMessage = inputCopy.shift();
    let tempMessage = '';
    let currentLine = inputCopy.shift();

    while (currentLine !== 'Decode') {

        let tokens = currentLine.split('|')
        let command = tokens[0];

        switch (command) {
            case "Move":
                let nLetters = Number(tokens[1]);
                let lettersToMove = secretMessage.substring(0, nLetters);
                tempMessage = secretMessage.replace(lettersToMove, '');
                tempMessage += lettersToMove
                secretMessage = tempMessage;
                break;
            case "Insert":
                let index = Number(tokens[1]);
                let value = tokens[2];
                tempMessage = secretMessage.split('');
                tempMessage.splice(index, 0, value);
                secretMessage = tempMessage.join('');
                break;
            case "ChangeAll":
                let substring = tokens[1];
                let replacement = tokens[2];

                while (secretMessage.includes(substring)) {
                    tempMessage = secretMessage.replace(substring, replacement);
                    secretMessage = tempMessage;
                }
                break;
        }

        currentLine = inputCopy.shift();
    }

    console.log(`The decrypted message is: ${secretMessage}`);

}
theImitationGame([
    'zzHe',
    'ChangeAll|z|l',
    'Insert|2|o',
    'Move|3',
    'Decode'
])

// theImitationGame([
//     'owyouh',
//     'Move|2',
//     'Move|3',
//     'Insert|3|are',
//     'Insert|9|?',
//     'Decode'
// ])

// Solve 2 of 2:
function theImitationGame(inputArrayStrings) {

    let secretMessage = inputArrayStrings.shift();
    let line = inputArrayStrings.shift();
    let command = line.split("|")[0];

    while (command !== 'Decode') {

        let value1 = line.split('|')[1];
        let value2 = line.split('|')[2];

        switch (command) {
            case "Move":
                let n = Number(value1);
                let slice1 = secretMessage.slice(0, n);
                let slice2 = secretMessage.slice(n);
                secretMessage = slice2 + slice1;
                break;
            case "Insert":
                let index = Number(value1);
                secretMessage = secretMessage.substring(0, index) + value2 + secretMessage.substring(index);
                break;
            case "ChangeAll":
                if (secretMessage.includes(value1)) {
                    while (secretMessage.includes(value1)) {
                        secretMessage = secretMessage.replace(value1, value2);
                    }
                }
                break;
        }

        line = inputArrayStrings.shift();
        command = line.split("|")[0];
    }

    console.log(`The decrypted message is: ${secretMessage}`);

}
theImitationGame([
    'zzHe',
    'ChangeAll|z|l',
    'Insert|2|o',
    'Move|3',
    'Decode'
])

// theImitationGame([
//     'owyouh',
//     'Move|2',
//     'Move|3',
//     'Insert|3|are',
//     'Insert|9|?',
//     'Decode'
// ])
