// Write a function to find all the top integers in an array. A top integer is an integer, which is bigger than all the elements to its right. 

function maxNumber(nums) {

    let result = []

    for (let i = 0; i < nums.length; i++) {

        let isBigger = true;
        let currentNum = nums[i];

        for (let j = i + 1; j < nums.length; j++) {

            if (currentNum <= nums[j]) {
                isBigger = false;
            }
        };
      
        if (isBigger === true) {
            result.push(currentNum)
        }
    };
  
    console.log(result.join(' '));
}
maxNumber([1, 4, 3, 2])
maxNumber([14, 24, 3, 19, 15, 17])
maxNumber([41, 41, 34, 20])
maxNumber([27, 19, 42, 2, 13, 45, 48])
