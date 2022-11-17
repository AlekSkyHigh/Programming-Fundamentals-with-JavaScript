// Write a JS function that takes one parameter and prints on two lines the type of the parameter and then one of the following:
// •	If the parameter type is either string or number, print its value
// •	Otherwise, print the text 'Parameter is not suitable for printing'

function echoType(input) {

    let type = typeof input
    console.log(type);

    if (type === `string` || type === `number`) {
        console.log(input);
    } else {
        console.log('Parameter is not suitable for printing');
    }

}
echoType('Hello, JavaScript!')
echoType(18)
echoType(null)
