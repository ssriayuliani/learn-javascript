// WRITE STREAM
// Unlike a readable stream, which ends when it has no more data to read, 
// a writable stream could remain open indefinitely. 
// We can indicate the end of a writable stream with the .end() method. 


const readline = require('readline');
const fs = require('fs');

const myInterface = readline.createInterface({
  input: fs.createReadStream('shoppingList.txt')
});

const fileStream = fs.createWriteStream('shoppingResults.txt')

function transformData(line){
  fileStream.write(`They were out of: ${line}\n`)
}
myInterface.on('line', transformData)