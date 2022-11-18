// Write a program that receives a number n.  For all numbers in the range [1…n] print the number and if it is special or not (True / False).
// •	A number is special when its sum of digits is 5, 7 or 11.

function specialNumber(number) {

    let sum = 0;

    for (let i = 1; i <= number; i++) {

        i = i.toString();

        for (let y = 0; y < i.length; y++) {

            sum += Number(i[y]);
        };

        if (sum === 5 || sum === 7 || sum === 11) {
            console.log(`${i} -> True`);
        } else {
            console.log(`${i} -> False`);
        };

        sum = 0;
    };

}
// specialNumber(15)
specialNumber(20)
