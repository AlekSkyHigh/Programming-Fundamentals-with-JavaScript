// Write a program that calculates the difference between the sum of the even and the sum of the odd numbers in an array.

function evenAndOddSubtraction(arr) {

    let evenSum = 0;
    let oddSum = 0;

    for (let i = 0; i < arr.length; i++) {
        arr[i] = Number(arr[i]);
    }
    for (let num of arr) {
      
        if (num % 2 === 0) {
            evenSum += num;
        } else {
            oddSum += num;
        }
    }
  
    console.log(evenSum - oddSum);

}
evenAndOddSubtraction([1, 2, 3, 4, 5, 6])
evenAndOddSubtraction([3, 5, 7, 9])
evenAndOddSubtraction([2, 4, 6, 8, 10])
