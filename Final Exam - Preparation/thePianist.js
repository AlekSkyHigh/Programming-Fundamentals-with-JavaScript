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
