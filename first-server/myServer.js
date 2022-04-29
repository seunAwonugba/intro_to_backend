const http = require("http")

/**
 * Step 1. Define two constants
 * a. host 
 * b. port
 * Our server will be bound to the host and port
 */

const host = "localhost"
const port = 8000

/**
 * Local host here is equivalent to IP address, its the IP address
 * computers use when they are not interacting with eachother over
 * the internet, more lke an inernal IP address its value is always
 * 127.0.0.1
 */

/**
 * Port is more like an endpoint we use for our local ip address
 * for development purposes its best to use 8000, or 8080, and its the 
 * prefered port for HTTP servers
 */

//so when we eventually bind our http server or our web server or the server
//we created to the host, we'll be able to reach it on
//http://localhost:8000


/**
 * Step 2
 * let add a special function called request listener
 * The function handles incoming HTTP request and returns HTTP Response
 * the function must always have two arguments, 1. an incoming HTTP request object, and an out going HTTP server response object
 * And they must always be in order like that
 * 
 * 
 */

const requestListener = (myHttpRequest, myHttpResponse) => {
    //writeHead is used to set status code, u must always set status code, and it must be to 200 to serve as ok
    myHttpResponse.writeHead(200)
    myHttpResponse.end("My first node js HTTP server")
}

// our server will return "My first node js HTTP server" everytime someone trys to access our server

/**
 * Step 3 create our server
 */

const myServer = http.createServer(requestListener)
//Next we bind our server to a network address
myServer.listen(port,host, () => {
    console.log(`Server is running on http://${host}:${port}`)
})

/**
 * Technically what happpened is that we sent a get request to our server, thats listening on port 8000, fro the variable
 * we created initially, our server just simply sends the request to the requestListener function we created above
 * the function simply returns whats in it and its status sode
 */

//Note the response type above is a plain text, 

//Returning different types of data like, JSON, HTML or CSV
