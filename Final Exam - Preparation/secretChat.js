function secretChat(inputArrayStrings) {

    let hiddenMessage = inputArrayStrings.shift();

    while (inputArrayStrings[0] !== 'Reveal') {

        let tokens = inputArrayStrings.shift().split(":|:");
        let command = tokens[0];

        switch (command) {
            case "InsertSpace": {
                let givenIndex = Number(tokens[1]);
                hiddenMessage = hiddenMessage.substring(0, givenIndex) + " " + hiddenMessage.substring(givenIndex);
                console.log(hiddenMessage);

            } break;

            case "Reverse": {
                let givenSubstring = tokens[1];

                if (hiddenMessage.includes(givenSubstring)) {
                    let cutHiddenMessage = hiddenMessage.replace(givenSubstring, '')
                    let reversedGivenSubstring = givenSubstring.split('').reverse().join('');
                    let cutPlusReversed = cutHiddenMessage + reversedGivenSubstring;
                    hiddenMessage = cutPlusReversed;
                    console.log(hiddenMessage);
                } else {
                    console.log('error');
                }

            } break;

            case "ChangeAll": {
                let givenSubstring = tokens[1];
                let givenReplacement = tokens[2];

                if (hiddenMessage.includes(givenSubstring)) {
                    while (hiddenMessage.includes(givenSubstring)) {
                        hiddenMessage = hiddenMessage.replace(givenSubstring, givenReplacement);
                    }
                }
                console.log(hiddenMessage);

            } break;
        }

    }

    console.log(`You have a new text message: ${hiddenMessage}`);
}
secretChat([
    'heVVodar!gniV',
    'ChangeAll:|:V:|:l',
    'Reverse:|:!gnil',
    'InsertSpace:|:5',
    'Reveal'
])

secretChat([
    'Hiware?uiy',
    'ChangeAll:|:i:|:o',
    'Reverse:|:?uoy',
    'Reverse:|:jd',
    'InsertSpace:|:3',
    'InsertSpace:|:7',
    'Reveal'
])
