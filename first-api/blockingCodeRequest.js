const http = require("http")
const host = "localhost"
const port = 8000

const requestListener = (myRequest, myResponse) => {
    switch(myRequest.url){
        case "/" : 
            myResponse.writeHead(200)
            myResponse.end("Hello this is the home page")
            break;
        case "/about" : 
            myResponse.writeHead(200)
            myResponse.end("This is the about page")
            break;
        default : 
            myResponse.writeHead(404)
            myResponse.end("Page broken") 
            break;      
    }
}

const myServer = http.createServer(requestListener) 

myServer.listen(port, host, () => {
    console.log(`Server listening on port http//${host}:${port}`);
})