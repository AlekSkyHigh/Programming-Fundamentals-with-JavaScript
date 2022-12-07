// Write a function that sorts an array of numbers so that the first element is the biggest one, the second is the smallest one, the third is the second biggest one, and the fourth is the second smallest one, and so on. 
// Print the elements on one row, separated by a single space.

function sorting(arr) {

    let sortedNums = arr.sort((a, b) => a - b);
    let resultArr = [];

    while (arr.length > 0) {

        let last = sortedNums.pop();
        resultArr.push(last);

        let first = sortedNums.shift();
        resultArr.push(first);
    }

    console.log(resultArr.join(' '));

}
sorting([1, 21, 3, 52, 69, 63, 31, 2, 18, 94])
sorting([34, 2, 32, 45, 690, 6, 32, 7, 19, 47])
