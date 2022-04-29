const fs = require("fs")

function myReadFileFunction(path){
    fs.readFile(path, "utf-8", (err, data)=> {
        if(err){
            console.log(`An error occured reading file :  ${err.message}`);
        } else {
            console.log(`${data}`);
        }

    })
}

myReadFileFunction("../node files/sample.txt")