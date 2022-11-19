// Write a function, which will be given a single number. Your task is to find the sum of its digits.

function sumDigits(number) {

    number = number.toString();
    let sum = 0;
    let numberLength = number.length;

    for (index = 0; index < numberLength; index++) {
        sum += Number(number[index]);
    }
    console.log(sum);

}
sumDigits(245678)
sumDigits(97561)
sumDigits(543)
