// Write a function to check if a number is prime (only divisible by itself and one).
// The input comes as a single number argument.
// The output should be the return value of your function. Return true for prime number and false otherwise.

function primeNumberChecker(number) {

    let isPrime = true;

    for (let i = 2; i * i < number; i++) {

        if (number % i === 0) {

            isPrime = false;
            break;
        }
    };
 
    console.log(isPrime);

}
primeNumberChecker(7)
primeNumberChecker(8)
primeNumberChecker(81)
