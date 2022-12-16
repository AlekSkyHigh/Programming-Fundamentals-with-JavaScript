// You will receive a single string.
// This string is written in PascalCase format. Your task here is to split this string by every word in it.
// Print them joined by comma and space.

// Solve 1 of 2:
function pascalCaseSplitter(string) {

    let result = string.split(/(?=[A-Z])/);

    console.log(result.join(", "));
}
pascalCaseSplitter('SplitMeIfYouCanHaHaYouCantOrYouCan')

pascalCaseSplitter('HoldTheDoor')

pascalCaseSplitter('ThisIsSoAnnoyingToDo')



// Solve 2 of 2:
// You will receive a single string.
// This string is written in PascalCase format. Your task here is to split this string by every word in it.
// Print them joined by comma and space.

function pascalCaseSplitter(string) {

    let result = string[0];
    let lower = string.toLowerCase();

    for (let index = 1; index < string.length; index++) {

        if (string[index] !== lower[index]) {
            result += ', ';
        }
        result += string[index];
    }
    console.log(result);
}
pascalCaseSplitter('SplitMeIfYouCanHaHaYouCantOrYouCan')

pascalCaseSplitter('HoldTheDoor')

pascalCaseSplitter('ThisIsSoAnnoyingToDo')
