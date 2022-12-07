// Write a function that orders an array of strings, by their length in ascending order as primary criteria, and by alphabetical value in ascending order as second criteria. The comparison should be case-insensitive.
// The input comes as an array of strings.
// The output is the ordered array of strings, each on a separate line.

function sortAnArrayBy2Criteria(arr) {

    let sortedArray = arr.sort((a, b) => {
        return a.length - b.length || a.localeCompare(b);
    });

    sortedArray.forEach(element => {
        console.log(element);
    });

}
// sortAnArrayBy2Criteria(['alpha', 'beta', 'gamma'])
sortAnArrayBy2Criteria(['Isacc', 'Theodor', 'Jack', 'Harrison', 'George'])
