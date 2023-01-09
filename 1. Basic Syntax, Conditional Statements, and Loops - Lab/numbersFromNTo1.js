// You are given a number num. Write a PHP script that loops through all of the numbers from num to 1 and prints them. 
// The input comes as a parameter named num. The parameter num will hold a positive integer.

function numbersFromNTo1(n) {

    while (n >= 1) {

        console.log(n);
        n--;
    }

}
numbersFromNTo1(5)
// numbersFromNTo1(3)
