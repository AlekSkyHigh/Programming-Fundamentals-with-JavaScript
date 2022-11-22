// Write a function that calculates a triangle’s area by its 3 sides.
// The input comes as three number arguments, representing one side of a triangle.
// The output should be printed to the console.

function triangleArea(first, second, third) {

    let sp = (first + second + third) / 2;

    let firstDifference = sp - first;
    let secondDifference = sp - second;
    let thirdDifference = sp - third;

    let area = Math.sqrt(sp * firstDifference * secondDifference * thirdDifference)

    console.log(area);
}
triangleArea(2, 3.5, 4)
triangleArea(3, 5.5, 4)
