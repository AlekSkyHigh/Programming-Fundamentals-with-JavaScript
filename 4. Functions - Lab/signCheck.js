// Write a function, that checks whether the result of the multiplication numOne * numTwo * numThree is positive or negative. 
// Try to do this WITHOUT multiplying the 3 numbers.

function signCheck(numOne, numTwo, numThree) {

    if ((numOne * numTwo) > 0 && numThree > 0) {
        console.log("Positive");
    } else if ((numOne * numTwo) < 0 && numThree < 0) {
        console.log("Positive");
    } else if ((numOne * numTwo) > 0 && numThree < 0) {
        console.log("Negative");
    } else if ((numOne * numTwo) < 0 && numThree > 0) {
        console.log("Negative");
    }

}
signCheck(5, 12, -15);
signCheck(-6, -12, 14);
signCheck(-1, -2, -3);
signCheck(-5, 1, 1);
