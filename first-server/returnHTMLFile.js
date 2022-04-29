const fs = require("fs").promises
const http = require("http")
const path = require("path")
// const htmlPath = require("../html/index.html")

const port = 8000
const host = "localhost"

//get index.html path
var htmlPath = path.join(__dirname, "..", "html", "index.html")
// console.log(htmlPath);

//retun html file more efficiently, this variable will hold HTML file contents
let indexFile;


// readFileFunction(htmlPath)
const requestListener = (myRequest, myResponse) => {
    myResponse.setHeader("Content-Type", "text/html")
    myResponse.writeHead(200)
    myResponse.end(indexFile)
}

//every time the server starts there is something to load, stored in indexFile, just that presently now its empty

const myServer = http.createServer(requestListener)

fs.readFile(htmlPath)
.then( lamda => {
    //we then add data to the empty indexFile, the data is the file read using the fs module
    indexFile = lamda
    myServer.listen(port, host, () => {
        console.log(`Server runnning on port http//${host}:${port}`);
    
    })
})

.catch(err => {
    console.error(`Could not read index.html file: ${err}`)
    process.exit(1)    
})

