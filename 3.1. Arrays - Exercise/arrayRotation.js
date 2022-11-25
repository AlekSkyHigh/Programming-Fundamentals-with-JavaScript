// Write a function that receives an array and the number of rotations you have to perform. 
// Note: Depending on the number of rotations, the first element goes to the end.

function arrayRotation(nums, rotations) {

    for (let index = 0; index < rotations; index++) {

        let numToMove = nums.shift();
        nums.push(numToMove);
    }
    console.log(nums.join(' '));

}
arrayRotation([51, 47, 32, 61, 21], 2)
arrayRotation([32, 21, 61, 1], 4)
arrayRotation([2, 4, 15, 31], 5)
