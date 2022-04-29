const http = require("http")

const host = "localhost"
const port = 8000

const requestListener = (myRequest, myResponse) => {
    myResponse.setHeader("Content-Type", "text/html")
    myResponse.writeHead(200)
    myResponse.end("<html> <body> <h1>Hello my first HTML web page</h1></body></html>")

}

const myServer = http.createServer(requestListener)

myServer.listen(port, host, () => {
    console.log(`Server is running on port http://${host}:${port}`);
})

//NOTE most times HTML is always written in a .html file, lets see how we can return response from such files
/**
 * To return contents of an HTML file, u first need to access the file using fs module
 */