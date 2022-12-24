// The first line of the input will be your raw activation key. It will consist of letters and numbers only. 
// After that, until the "Generate" command is given, you will be receiving strings with instructions for different operations that need to be performed upon the raw activation key.
// There are several types of instructions, split by ">>>":
// •	"Contains>>>{substring}":
// o	If the raw activation key contains the given substring, prints: "{raw activation key} contains {substring}".
// o	Otherwise, prints: "Substring not found!"
// •	"Flip>>>Upper/Lower>>>{startIndex}>>>{endIndex}":
// o	Changes the substring between the given indices (the end index is exclusive) to upper or lower case and then prints the activation key.
// o	All given indexes will be valid.
// •	"Slice>>>{startIndex}>>>{endIndex}":
// o	Deletes the characters between the start and end indices (the end index is exclusive) and prints the activation key.
// o	Both indices will be valid.

function activationKeys(inputArrayStrings) {

    let rawKey = inputArrayStrings.shift();

    while (inputArrayStrings[0] !== "Generate") {

        let tokens = inputArrayStrings.shift().split(">>>");
        let instruction = tokens[0];

        switch (instruction) {
            case "Contains": {
                let substring = tokens[1];

                if (rawKey.includes(substring)) {
                    console.log(`${rawKey} contains ${substring}`);
                } else {
                    console.log(`Substring not found!`);
                }

            } break;

            case "Flip": {
                let upperOrLower = tokens[1];
                let startIndex = Number(tokens[2]);
                let endIndex = Number(tokens[3]);

                if (upperOrLower === "Upper") {
                    let slice1 = rawKey.slice(0, startIndex);
                    let slice2 = rawKey.slice(endIndex);
                    let substring = rawKey.substring(startIndex, endIndex).toUpperCase();
                    rawKey = slice1 + substring + slice2;
                    console.log(rawKey);
                }
                if (upperOrLower === "Lower") {
                    let slice1 = rawKey.slice(0, startIndex);
                    let slice2 = rawKey.slice(endIndex);
                    let substring = rawKey.substring(startIndex, endIndex).toLowerCase();
                    rawKey = slice1 + substring + slice2;
                    console.log(rawKey);
                }

            } break;

            case "Slice": {
                let startIndex = Number(tokens[1]);
                let endIndex = Number(tokens[2]);

                let slice1 = rawKey.slice(0, startIndex);
                let slice2 = rawKey.slice(endIndex);
                rawKey = slice1 + slice2;
                console.log(rawKey);

            } break;
        }
    }
    console.log(`Your activation key is: ${rawKey}`);
}
activationKeys([
    "abcdefghijklmnopqrstuvwxyz",
    "Slice>>>2>>>6",
    "Flip>>>Upper>>>3>>>14",
    "Flip>>>Lower>>>5>>>7",
    "Contains>>>def",
    "Contains>>>deF",
    "Generate"
])


// activationKeys(["134softsf5ftuni2020rockz42",
// "Slice>>>3>>>7",
// "Contains>>>-rock",
// "Contains>>>-uni-",
// "Contains>>>-rocks",
// "Flip>>>Upper>>>2>>>8",
// "Flip>>>Lower>>>5>>>11",
// "Generate"])
