// Write a function that extracts only those numbers that form a non-decreasing subset. 
// In other words, you start from the first element and continue to the end of the given array of numbers. 
// Any number which is LESS THAN the current biggest one is ignored, alternatively if it’s equal or higher 
// than the current biggest one you set it as the current biggest one and you continue to the next number. 

// Solving 1:
function nonDecreasingSubset (arr) {

    console.log(arr.filter((el, index) => el >= Math.max(...arr.slice(0, index))).join(' '));
    
}
nonDecreasingSubset([ 1, 3, 8, 4, 10, 12, 3, 2, 24])

//Solving 2:
function nonDecreasingSubset (arr) {

    let max = arr[0];
    let result = arr.filter(el => {
        if (el >= max) {
            max = el;
        }
        return el >= max;
    });
    console.log(result.join(' '));    

}
nonDecreasingSubset([ 1, 3, 8, 4, 10, 12, 3, 2, 24])
nonDecreasingSubset([ 1, 2, 3, 4])
nonDecreasingSubset([ 20, 3, 2, 15, 6, 1])


