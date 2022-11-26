// Write a function that determines if there exists an element in the array of numbers such that the sum of the elements on its left is equal to the sum of the elements on its right. 
// If there are NO elements to the left/right, their sum is 0. 
// Print the index that satisfies the required condition or "no" if there is no such index.

function equalSums(nums) {

    let isFound = 'no';

    for (let i = 0; i < nums.length; i++) {             //this is the main index

        let leftSum = 0;
        let rightSum = 0;

        for (let l = 0; l < i; l++) {                   //calc the left sum

            leftSum += nums[l];
        };
      
        for (let r = i + 1; r < nums.length; r++) {     // calc the right sum

            rightSum += nums[r]
        };
      
        if (leftSum === rightSum) {

            isFound = i;
        };
    };
    console.log(isFound);
}
equalSums([1, 2, 3, 3])
equalSums([1, 2])
equalSums([1])
equalSums([1, 2, 3])
equalSums([10, 5, 5, 99, 3, 4, 2, 5, 1, 1, 4])
