// Write a function that finds the biggest number.
// The input comes as 3 parameters.
// The output is the biggest of the input numbers.

function biggestOf3Numbers(first, second, third) {

    if (first > second && first > third) {
        console.log(first);
    } else if (second > first && second > third) {
        console.log(second);
    } else if (third > first && third > second) {
        console.log(third);
    } else if (first == second && second == third) {
        console.log(first);
    }

}
biggestOf3Numbers(-2, 7, 3)
biggestOf3Numbers(130, 5, 99)
biggestOf3Numbers(43, 43.2, 43.1)
biggestOf3Numbers(2, 2, 2)
