const http = require("http")

const port = 8080
const host = "localhost"

const requestListener = (myRequest, myResponse) => {
    myResponse.setHeader("Content-Type", "text/csv")
    //always ensure u add content description when u want to return a CSV file
    //csv file are downloadable files
    myResponse.setHeader("Content-Disposition", "attachment;filename=myCSVFile.csv" )
    myResponse.writeHead(200)
    myResponse.end(`S/N, name , email\n1, Awonugba seun, seunawonugba@gmail.com`)
}

const myServer = http.createServer(requestListener)

myServer.listen(port, host, () => {
    console.log(`server is running on port http//${host}:${port}`)
})