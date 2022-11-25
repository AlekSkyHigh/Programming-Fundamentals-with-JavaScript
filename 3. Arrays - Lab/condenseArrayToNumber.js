// Write a program, which receives an array of numbers, and condenses them by summing adjacent couples of elements until a single number is obtained. 

//First solving:
function condenseArrayToNumber(numbers) {

    let num = [];

    for (let i = 0; i < numbers.length; i++) {     
        num[i] = Number(numbers[i]);
    }

    while (num.length > 1) {
        let condense = [];
        for (let i = 0; i < num.length - 1; i++) {
            condense[i] = Number(num[i] + num[i + 1]);
        }
        num = condense;
        condense = 0;
    }
    console.log(Number(num));
}
condenseArrayToNumber([2, 10, 3])
// condenseArrayToNumber([5, 0, 4, 1, 2])
// condenseArrayToNumber([1])


//Second solving: 
function condenseArrayToNumber(nums) {

    while (nums.length > 1) { 

        let condensedArray = [];

        for (let i = 0; i < nums.length - 1; i++) {
            condensedArray[i] = nums[i] + nums[i+1];
        }
        nums = condensedArray;
    }

    console.log(nums[0]);
}
condenseArrayToNumber([2, 10, 3])
condenseArrayToNumber([5, 0, 4, 1, 2])
condenseArrayToNumber([1])


// Third solving:
function condenseArrayToNumber(nums) {

    while (nums.length > 1) { 
        condenseArray(nums);
    }

    function condenseArray(array) {
        let condensedArray = [];
        for (let i = 0; i < array.length - 1; i++) {
            condensedArray[i] = array[i] + array[i+1];
        }
        nums = condensedArray;
    }
    console.log(nums[0]);
}
condenseArrayToNumber([2, 10, 3])
condenseArrayToNumber([5, 0, 4, 1, 2])
condenseArrayToNumber([1])
