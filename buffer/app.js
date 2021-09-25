// , use the buffer and timer modules to create two buffers, join them together, 
// convert them to a string, and log the result to the console after 3 seconds.

const buffer1 = Buffer.from('hello')
const buffer2 = Buffer.from('monika')
const bufferArray = [buffer1, buffer2]
const bufferConcat = Buffer.concat(bufferArray)

setTimeout(() => {
    console.log(bufferConcat)
    process.stdout.write(bufferConcat + '\n')
    console.log(bufferConcat.toString())
}, 3000)