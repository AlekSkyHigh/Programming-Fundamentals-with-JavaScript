// You will receive two arrays of integers. The second array is containing exactly three numbers. 
// The first number represents the number of elements you have to take from the first array (starting from the first one).
// The second number represents the number of elements you have to delete from the numbers you took (starting from the first one). 
// The third number is the number we search in our collection after the manipulations. 
// As output print how many times that number occurs in our array in the following format: 
// "Number {number} occurs {count} times."

function searchForANumber(firstArr, secondArr) {

    let takenNumbers = firstArr.splice(0, secondArr[0]); 
    let deletedNumbers = takenNumbers.splice(0, secondArr[1]); 
    let counter = 0;

    for (const num of takenNumbers) {

        if (num === secondArr[2]) {
            counter++;
        }

    }
    console.log(`Number ${secondArr[2]} occurs ${counter} times.`);

}
searchForANumber(
    [5, 2, 3, 4, 1, 6],
    [5, 2, 3]
)

searchForANumber(
    [7, 1, 5, 8, 2, 7],
    [3, 1, 5]
)
