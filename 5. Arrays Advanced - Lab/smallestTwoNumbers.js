// Write a function that prints the two smallest elements from an array of numbers.
// The input comes as an array of number elements.
// The output is printed on the console on a single line, separated by space.

function smallestTwoNumbers(arr) {

    let sortedInAscending = arr.sort((a, b) => {
        return a - b;
    })

    console.log(sortedInAscending.slice(0, 2).join(" "));

}
smallestTwoNumbers([30, 15, 50, 5])
smallestTwoNumbers([3, 0, 10, 4, 7, 3])

//sort() - mutates the original array
