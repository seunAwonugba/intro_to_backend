const http = require("http")

const port = 8000
const host = "localhost"

//JSON Data to return, first store them in variables
const books = JSON.stringify([
    {title : "My first api", author : "awonugba seun", year : 1995},
    {title : "I will still write more apis", author : "seun awonugba", year : 2022}
])

const auhtors = JSON.stringify([
    {name : "awonugba seun", countryOfBirth : "Nigeria", age : 1995},
    {name : "seun awonugba", countryOfBirth : "UK", year : 2025}
])
const requestListener = (myRequest, myResponse) => {
    myResponse.setHeader("Content-Type", "application/json")
    //lets return data based on users request
    switch (myRequest.url) {
        case "/books":
            myResponse.writeHead(200)
            myResponse.end(books)
            break;
        
        case "/authors" :
            myResponse.writeHead(200)
            myResponse.end(auhtors)
            break;
        default:
            myResponse.writeHead(404)
            myResponse.end(JSON.stringify({error : "Resource not found"}))
            break;
    }
}

const myServer = http.createServer(requestListener)
myServer.listen(port, host, () => {
    console.log(`Server listening on port http//${host}:${port}`);
})