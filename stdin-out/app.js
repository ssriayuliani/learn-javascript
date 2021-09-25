// We’ve written a function playGame() which expects a line of user input corresponding to a guess. Input read through the terminal is received as a Buffer object with a new line character at the end, so we’ve converted it to a string and trimmed off the unnecessary new line character. We then feed the processed input into the testNumber() function required in from game.js. 
let { testNumber } = require('./game.js');

process.stdout.write("I'm thinking of a number from 1 through 10. What do you think it is? \n(Write \"quit\" to give up.)\n\nIs the number ... ");

let playGame = (userInput) => {
    let input = userInput.toString().trim();
    testNumber(input);
};

process.stdin.on('data', playGame)
// When a user enters text into the terminal and hits enter, a 'data' event will be fired and our anonymous listener callback will be invoked.
