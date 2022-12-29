function messageTranslator(inputArrayString) {

    let stringsCount = Number(inputArrayString.shift());
    let pattern = /!(?<command>[A-Z][a-z]{2,})!:\[(?<bracets>[A-z\s*]{8,})\]/gm;
    let translation = "";
    let command = "";

    for (let i = 0; i < stringsCount; i++) {

        let exec = pattern.exec(inputArrayString[i]);

        if (exec) {
            command = exec.groups['command'];
            let string = exec.groups['bracets'];

            for (let char of string) {

                if (char.charCodeAt() >= 97 && char.charCodeAt() <= 122 || char.charCodeAt() >= 65 & char.charCodeAt() <= 90) {
                    translation += `${char.charCodeAt()} `
                }
            }
            console.log(`${command}: ${translation}`);
            
        } else {
            console.log(`The message is invalid`);
        }
    }

}
messageTranslator([
    "2",
    "!Send!:[IvanisHere]",
    "*Time@:[Itis5amAlready"
])

// messageTranslator(["3",
//     "go:[outside]",
//     "!drive!:YourCarToACarWash",
//     "!Watch!:[LordofTheRings]"])

