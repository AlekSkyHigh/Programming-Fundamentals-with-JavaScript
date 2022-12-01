// A palindrome is a number, which reads the same backward as forward, such as 323 or 1001. 
// Write a function, which receives an array of positive integers and checks if each integer is a palindrome or not.

function palindromeIntegers(array) {

    let isPalindrome = false;

    for (let i = 0; i < array.length; i++) {

        let numToString = array[i].toString();
        let reversedString = numToString.split("").reverse().join("");

        if (numToString === reversedString) {
            isPalindrome = true;
        } else {
            isPalindrome = false;
        }

        console.log(isPalindrome);
    }

}
palindromeIntegers([123, 323, 421, 121])
// palindromeIntegers([32,2,232,1010])
