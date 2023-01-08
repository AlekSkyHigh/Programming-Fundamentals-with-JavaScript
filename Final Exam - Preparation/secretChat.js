// You have plenty of free time, so you decide to write a program that conceals and reveals your received messages. Go ahead and type it in!
// On the first line of the input, you will receive the concealed message. After that, until the "Reveal" command is given, you will receive strings with instructions for different operations that need to be performed upon the concealed message to interpret it and reveal its actual content. There are several types of instructions, split by ":|:"
// •	"InsertSpace:|:{index}":
// o	Inserts a single space at the given index. The given index will always be valid.
// •	"Reverse:|:{substring}":
// o	If the message contains the given substring, cut it out, reverse it and add it at the end of the message. 
// o	If not, print "error".
// o	This operation should replace only the first occurrence of the given substring if there are two or more occurrences.
// •	"ChangeAll:|:{substring}:|:{replacement}":
// o	Changes all occurrences of the given substring with the replacement text.

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
