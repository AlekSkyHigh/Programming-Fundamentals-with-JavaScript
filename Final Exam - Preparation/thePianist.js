// You are a pianist and you like to keep a list of your favorite piano pieces. Create a program, to help you organize it and add, change, remove pieces from it!
// On the first line of the standard input you will receive an integer n – the number of pieces that you will initially have. On the next n lines the pieces themselves will follow with their composer and key, separated by "|" in the following format:
// {piece}|{composer}|{key}
// Then, you will be receiving different commands, each on a new line, separated by "|", until the "Stop" command is given:
// •	Add|{piece}|{composer}|{key} 
// o	You need to add the given piece with the information about it to the other pieces
// o	If the piece is already in the collection, print:
// "{piece} is already in the collection!"
// o	If the piece is not in the collection, print: 
// "{piece} by {composer} in {key} added to the collection!"
// •	Remove|{piece}
// o	If the piece is in the collection, remove it and print:
// "Successfully removed {piece}!"
// o	If the piece is not in the collection, print:
// "Invalid operation! {piece} does not exist in the collection."
// •	ChangeKey|{piece}|{new key}
// o	If the piece is in the collection, change its key with the given one and print:
// "Changed the key of {piece} to {new key}!"
// o	If the piece is not in the collection, print:
// "Invalid operation! {piece} does not exist in the collection."
// Upon receiving the "Stop" command you need to print all pieces in your collection, sorted by their name and by the name of their composer in alphabetical order, in the following format:
// "{Piece} -> Composer: {composer}, Key: {key}"

function thePianist(inputArrayStrings) {

    let initialCollectionCount = Number(inputArrayStrings.shift());
    let recordsInfo = {};
    let arrayCollection = [];

    for (let i = 0; i < initialCollectionCount; i++) {

        let [piece, composer, key] = inputArrayStrings.shift().split('|');

        recordsInfo = { piece, composer, key };
        arrayCollection.push(recordsInfo);
    }

    while (inputArrayStrings[0] !== 'Stop') {

        let tokens = inputArrayStrings.shift().split("|");
        let command = tokens[0];

        switch (command) {

            case "Add": {
                let piece = tokens[1];
                let composer = tokens[2];
                let key = tokens[3];

                let pieceCheck = arrayCollection.find((pieceName) => pieceName.piece === piece);
                let index = arrayCollection.indexOf(pieceCheck);

                if (!pieceCheck) {
                    recordsInfo = { piece, composer, key };
                    arrayCollection.push(recordsInfo);
                    console.log(`${piece} by ${composer} in ${key} added to the collection!`);
                } else {
                    console.log(`${piece} is already in the collection!`);
                }

            } break;

            case "Remove": {
                let piece = tokens[1];

                let pieceCheck = arrayCollection.find((pieceName) => pieceName.piece === piece);
                let index = arrayCollection.indexOf(pieceCheck);

                if (pieceCheck) {
                    arrayCollection.splice(index, 1);
                    console.log(`Successfully removed ${piece}!`);
                } else {
                    console.log(`Invalid operation! ${piece} does not exist in the collection.`);
                }

            } break;

            case "ChangeKey": {
                let piece = tokens[1];
                let newKey = tokens[2];

                let pieceCheck = arrayCollection.find((pieceName) => pieceName.piece === piece);
                let index = arrayCollection.indexOf(pieceCheck);

                if (pieceCheck) {
                    arrayCollection[index].key = newKey
                    console.log(`Changed the key of ${piece} to ${newKey}!`);
                } else {
                    console.log(`Invalid operation! ${piece} does not exist in the collection.`);
                }

            } break;
        }
    }

    arrayCollection.forEach(obj => console.log(`${obj.piece} -> Composer: ${obj.composer}, Key: ${obj.key}`));
}
// thePianist([
//     '3',
//     'Fur Elise|Beethoven|A Minor',
//     'Moonlight Sonata|Beethoven|C# Minor',
//     'Clair de Lune|Debussy|C# Minor',
//     'Add|Sonata No.2|Chopin|B Minor',
//     'Add|Hungarian Rhapsody No.2|Liszt|C# Minor',
//     'Add|Fur Elise|Beethoven|C# Minor',
//     'Remove|Clair de Lune',
//     'ChangeKey|Moonlight Sonata|C# Major',
//     'Stop'
// ])

thePianist([
    '4',
    'Eine kleine Nachtmusik|Mozart|G Major',
    'La Campanella|Liszt|G# Minor',
    'The Marriage of Figaro|Mozart|G Major',
    'Hungarian Dance No.5|Brahms|G Minor',
    'Add|Spring|Vivaldi|E Major',
    'Remove|The Marriage of Figaro',
    'Remove|Turkish March',
    'ChangeKey|Spring|C Major',
    'Add|Nocturne|Chopin|C# Minor',
    'Stop'
]
)
