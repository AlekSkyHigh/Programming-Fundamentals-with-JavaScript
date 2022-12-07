// You will be given an array of integer numbers on the first line of the input.
// Remove all repeating elements from the array. 
// Print the result elements separated by a single space.

// Solving 1 of 3: 
function distinctArray(arry) {

    const toFindDuplicates = arry => arry.filter((item, index) => arry.indexOf(item) !== index)
    const duplicateElements = toFindDuplicates(arry);

    let uniqueNums = arry.filter((item, index) => {
        return arry.indexOf(item) === index;
    });

    console.log(uniqueNums.join(' '));
}
distinctArray([1, 2, 3, 4])
distinctArray([7, 8, 9, 7, 2, 3, 4, 1, 2])
distinctArray([20, 8, 12, 13, 4, 4, 8, 5])

// Solving 2 of 3:
function distinctArray(arr) {

    let uniqueNums = [];

    for (let i = 0; i < arr.length; i++) {

        let currentNum = arr[i];

        if (!uniqueNums.includes(currentNum)) {

            uniqueNums.push(currentNum);
        }
    }

    console.log(uniqueNums.join(' '));
}
distinctArray([1, 2, 3, 4])
distinctArray([7, 8, 9, 7, 2, 3, 4, 1, 2])
distinctArray([20, 8, 12, 13, 4, 4, 8, 5])


// Solving 3 of 3:
function distinctArray(arr) {

    let uniqueNums = new Set(arr);

    console.log(...uniqueNums);
}
distinctArray([1, 2, 3, 4])
distinctArray([7, 8, 9, 7, 2, 3, 4, 1, 2])
distinctArray([20, 8, 12, 13, 4, 4, 8, 5])


