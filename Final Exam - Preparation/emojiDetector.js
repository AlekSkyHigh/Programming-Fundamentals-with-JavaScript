// Your task is to write a program that extracts emojis from a text and find the threshold based on the input.
// You have to get your cool threshold. It is obtained by multiplying all the digits found in the input.  The cool threshold could be a huge number, so be mindful.
// An emoji is valid when:
// •	It is surrounded by 2 characters, either "::" or "**"
// •	It is at least 3 characters long (without the surrounding symbols)
// •	It starts with a capital letter
// •	Continues with lowercase letters only
// Examples of valid emojis: ::Joy::, **Banana**, ::Wink::
// Examples of invalid emojis: ::Joy**, ::fox:es:, **Monk3ys**, :Snak::Es::
// You need to count all valid emojis in the text and calculate their coolness. The coolness of the emoji is determined by summing all the ASCII values of all letters in the emoji. 
// Examples: ::Joy:: - 306, **Banana** - 577, ::Wink:: - 409
// You need to print the result of the cool threshold and, after that to take all emojis out of the text, count them and print only the cool ones on the console.
// Input
// •	On the single input, you will receive a piece of string. 
// Output
// •	On the first line of the output, print the obtained Cool threshold in the format:
// "Cool threshold: {coolThresholdSum}"
// •	On the following line, print the count of all emojis found in the text in format:
// "{countOfAllEmojis} emojis found in the text. The cool ones are:
// {cool emoji 1}
// {cool emoji 2}
// …
// {cool emoji N}"
// Constraints
// There will always be at least one digit in the text!

function emojiDetector(inputArrayStrings) {

    let string = inputArrayStrings.shift();

    let emojiPattern = /([:]{2}|[*]{2})(?<emoji>[A-Z][a-z]{2,})\1/gm
    let digitPattern = /\d/gm;

    let coolThreshold = string.match(digitPattern).map(Number).reduce((a, b) => a * b, 1);
    console.log(`Cool threshold: ${coolThreshold}`);

    let validEmojies = string.match(emojiPattern);
    console.log(`${validEmojies.length} emojis found in the text. The cool ones are:`);

    for (let index = 0; index < validEmojies.length; index++) {

        let currentEmoji = validEmojies[index];
        let currentSum = 0;

        for (let char of currentEmoji) {
            if (char.charCodeAt() >= 97 && char.charCodeAt() <= 122) {
                currentSum += char.charCodeAt();
            }
            if (char.charCodeAt() >= 65 && char.charCodeAt() <= 90) {
                currentSum += char.charCodeAt();
            }
        };

        if (currentSum > coolThreshold) {
            console.log(currentEmoji);
        };
    }

}
// emojiDetector(["In the Sofia Zoo there are 311 animals in total!::Smiley:: This includes 3 **Tigers**, 1 ::Elephant:, 12 **Monk3ys**, a **Gorilla::, 5 ::fox:es: and 21 different types of :Snak::Es::. ::Mooning:: **Shy**"])

emojiDetector(["5, 4, 3, 2, 1, go! The 1-th consecutive banana-eating contest has begun! ::Joy:: **Banana** ::Wink:: **Vali** ::valid_emoji::"])

// emojiDetector(["It is a long established fact that 1 a reader will be distracted by 9 the readable content of a page when looking at its layout. The point of using ::LoremIpsum:: is that it has a more-or-less normal 3 distribution of 8 letters, as opposed to using 'Content here, content 99 here', making it look like readable **English**."])
