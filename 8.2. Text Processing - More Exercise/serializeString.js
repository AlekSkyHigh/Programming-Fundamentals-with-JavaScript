// You have been tasked to serialize a string. The serialization is done specially, in which a character from that string is saved with the indexes at which it is found.
// The input will consist array, containing a single string, which may consist of ANY ASCII characters. Your task is to serialize the string in the following way:
// {char}:{index1}/{index2}/{index3}
// The char will be the character, and the indexes will be the indexes it is found at in the string.

function serializeString(inputArray) {

    let string = inputArray[0]
    let keys = [];

    for (let index = 0; index < string.length; index++) {

        if (!keys.includes(string[index])) {
            keys.push(string[index]);
        }
    };

    while (keys.length > 0) {

        let char = keys.shift();
        let indices = [];

        for (let index = 0; index < string.length; index++) {

            if (char === string[index]) {
                indices.push(index);
            }
        }
        console.log(char + ':' + indices.join('/'));
    };

}
serializeString(["abababa"])

serializeString(["avjavamsdmcalsdm"])
