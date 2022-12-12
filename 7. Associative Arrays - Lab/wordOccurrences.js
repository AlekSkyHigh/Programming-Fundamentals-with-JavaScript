// Write a function that counts the times each word occurs in a text. Print the words sorted by count in descending order. The input comes as an array of strings.

function wordOccurrences(inputArrayStrings) {

    let map = new Map();
    let counter = 0;

    for (let word of inputArrayStrings) {

        if (!map.has(word)) {
            counter = 1;
        } else {
            counter = map.get(word) + 1;
        }
        map.set(word, counter);
    };

    let sorted = Array.from(map).sort((a, b) => b[1] - a[1]);

    for (let kvp of sorted) {
        console.log(`${kvp[0]} -> ${kvp[1]} times`);
    };
    
}
wordOccurrences([
    "Here", "is", "the", "first", "sentence",
    "Here", "is", "another", "sentence",
    "And", "finally", "the", "third", "sentence"
])

// wordOccurrences(["dog", "bye", "city", "dog", "dad", "boys", "ginger"])
