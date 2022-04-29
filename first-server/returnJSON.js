const http = require("http")

const port = 8000
const host = "localhost"

const requestListener = (myRequest, myResponse) => {
    //to return a JSON, we need to set header to our response
    //NOTE setHeader adds an HTTP Header to the response.
    //HTTP headers are additional information that can be added to a request or response 
    myResponse.setHeader("Content-Type", "application/json")
    //content type is the original media type of a data before any encoding is done prior to sending
    //in this case the content type is application/json
    myResponse.writeHead(200)
    myResponse.end("{My first JSON response}")
}

const myServer = http.createServer(requestListener)
myServer.listen(port, host, () => {
    console.log(`Server is running on port http//${host}:${port}`)
})

