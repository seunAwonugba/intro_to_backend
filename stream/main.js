//streams are objects that lets you read data from a source or write data to a destination in a continous fashion
//we have 4 types of stream, 
/**
 * 1. Readable
 * 2. Writable
 * 3. Duplex
 * 4. Transform
 * 
 * 
 * 
 * 
 * NOTE: Each type of stream is an EventEmitter instance
 * 
 * commonly emmited events include
 * 1. data : This event is fired when there is data available to read
 * 2. error : its fired when there is error receiving or writing data
 * 3. end : its fired when there is no more data to read
 * 4. finish : Its fired when all data has been flushed 
 * 
 * 
 * E.g 
 * 1. Read from a stream
 */

// const fs = require("fs")
// var sendDataHere = ""

// const readableStream = fs.createReadStream("file.txt")
// //set encoding to the read stream

// readableStream.setEncoding("UTF8")

// //Read stream example
// readableStream.on("data", (chunk) => {
//     sendDataHere += chunk
// })

// readableStream.on("end", () => {
//     console.log(`Here is the data read: ${sendDataHere}`);
// })

// readableStream.on("error", (err) => {
//     console.log(`Error reading file caused by : ${err.message}`);
// })

// console.log("Program ended");

//2. Write to a stream

// const writeStream = fs.createWriteStream("output.txt")
// const dataToWriteFrom = "this is my sample"



// writeStream.write(dataToWriteFrom, "utf8")

// writeStream.end()

// writeStream.on("finish", () => {
//     console.log("Finished");
// })

// writeStream.on("error", (err) => {
//     console.log(`An error occured ${err.message}`);
// })


//piping is simply moving the output of one stream and making it the input of another stream 

// const readStream = fs.createReadStream("file.txt", "utf8")

// const writeStream = fs.createWriteStream("read_write.txt")

// readStream.pipe(writeStream, true)

// console.log("File written successfully");

// const writeStream = fs.createWriteStream("bigFile.txt")

// for (let index = 0; index < 1e6; index++) {
//     writeStream.write("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum", (err) => {
//         console.log(`An error occured trying to write to this stream:  ${err.message}`);
//     })

//     writeStream.end()

//     writeStream.on("finish", () => {
//         console.log("File written to destination successfully");
//     })

//     writeStream.on("error", (err) => {
//         console.log(`Error occured : ${err.stack}`);
//     })
    
// }


const fs = require("fs")
const http = require("http")

const port = 8000
const host = "localhost"

const requestListener = (req, res) => {
    const readStream = fs.createReadStream("bigFile.txt")
    //pass the stream as the response
    readStream.pipe(res)
}

const server = http.createServer(requestListener)

server.listen(port,host, () => {
    console.log(`Server listening on port: http//${host}:${port}`);
})

