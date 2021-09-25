// Buffer = To read files line-by-line, 
// we can use the .createInterface() method from the readline core module. 
// .createInterface() returns an EventEmitter set up to emit 'line'

const readline = require('readline');
const fs = require('fs');

const myInterface = readline.createInterface({
  input: fs.createReadStream('./shoppingList.txt')
})

function printData(data){
  console.log(`Item: ${data}`)
}

// 'line' event will be emitted after each line from the file is read
// assign our printData() function to execute whenever a 'line' event is emitted by using myInterface‘s .on() method.
myInterface.on('line', printData)


