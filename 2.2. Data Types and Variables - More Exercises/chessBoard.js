// Write a function to print a chessboard of size n X n. See the example for more information.
// The input comes as a single number argument n.
// The output should be returned as a result of your function in the form of a string.

function chessBoard(argument) {

    let size = Number(argument)
    let currentColour = 'black'
    let previousColour = ''
    console.log('<div class="chessboard">')

    for (let rows = 1; rows <= size; rows++) {
        console.log('  <div>')

        for (let columns = 1; columns <= size; columns++) {
            console.log(`    <span class="${currentColour}"></span>`);

            previousColour = currentColour
            currentColour = previousColour === 'black' ? 'white' : 'black'
        }

        console.log('  </div>')
        if (size % 2 === 0) {
            previousColour = currentColour
            currentColour = previousColour === 'black' ? 'white' : 'black'
        }
    }

    console.log('</div>')

}
chessBoard(3)
