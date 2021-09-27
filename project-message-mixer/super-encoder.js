// Import the encryptors functions here.
const { caesarCipher, reverseCipher, symbolCipher } = require('./encryptors')

const encodeMessage = (str, amount) => {
    // Use the encryptor functions here.
    return reverseCipher(symbolCipher(caesarCipher(str, amount)))
}

const decodeMessage = (str, amount) => {
    // Use the encryptor functions here.
    return caesarCipher(symbolCipher(reverseCipher(str)), amount);
}

// User input / output.

const handleInput = (userInput) => {
    const str = userInput.toString().trim();
    let amount = 6 
    let output;

    if (process.argv[2] === 'encode') {
        output = encodeMessage(str, amount);
    }
    if (process.argv[2] === 'decode') {
        output = decodeMessage(str, amount * -1);
    }
    process.stdout.write(output + '\n');
    process.exit();
}

// Run the program.
process.stdout.write('Enter the message you would like to encrypt...\n> ');
process.stdin.on('data', handleInput);