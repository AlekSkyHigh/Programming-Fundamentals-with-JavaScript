// Write a function that rotates an array. The array should be rotated to the right side, meaning that the last element should become the first, upon rotation. 
// The input comes as an array of strings. The last element of the array is the amount of rotation you need to perform.
// The output is the resulting array after the rotations. The elements should be printed on one line, separated by a single space.

function rotateArray(input) {

    let rotatations = Number(input.pop());

    for (let i = 0; i < rotatations; i++) {

        input.unshift(input.pop());

    }

    console.log(input.join(' '));

}
rotateArray(['1', '2', '3', '4', '2'])
rotateArray(['Banana', 'Orange', 'Coconut', 'Apple', '15'])
