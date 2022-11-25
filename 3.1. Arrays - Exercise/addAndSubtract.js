// Write a function, which changes the value of odd and even numbers in an array of numbers. 
// •	If the number is even - add to its value its index position
// •	If the number is odd - subtract to its value its index position

function addAndSubtract(numbers) {

    let result = [];
    let inputLength = numbers.length;
    let sumOriginalArray = 0;
    let sumModifiedArray = 0;

    for (let index = 0; index < inputLength; index++) {

        let currentNum = numbers[index];
        let even = currentNum + index;
        let odd = currentNum - index;

        sumOriginalArray += currentNum;

        if (currentNum % 2 === 0) {

            result.push(even);
            sumModifiedArray += even;

        } else {

            result.push(odd);
            sumModifiedArray += odd;
        }
    }

    console.log(result);
    console.log(sumOriginalArray);
    console.log(sumModifiedArray);

}
addAndSubtract([5, 15, 23, 56, 35])
// addAndSubtract([-5, 11, 3, 0, 2])
