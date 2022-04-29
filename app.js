// var os = require("os")
// const path = require("path")
// console.log(`1. Directory name of this current module is : ${__dirname}`)
// console.log(`2. Here is the file name of this current project ${__filename}`)
// console.log(`3. MOdule of this project ${module.id}`);
// console.log(`4. MOdule of this project ${process.features}`);
// // console.log(module)
// console.log(`5. ${os.arch()}`)
// console.log(`6. ${os.hostname()}`);
// console.log(`7 my system up time is ${os.uptime()}`);

// const currentUserOs = {
//     name : os.hostname(),
//     totalMen : os.totalmem(),
//     freeMen : os.freemem(),
//     release : os.release()
// }

// console.log(currentUserOs);

// console.log(`8: ${path.dirname(path)}`);
// //path, fs, http

const fs = require("fs").promises

// async function readFileFunction(filePath){
//     try{
//         const fileToRead = await fs.readFile(filePath)
//         console.log(fileToRead.toString());
//     }
//     catch(error){
//         console.log(`An error occured trying to read file: ${error.message}`)
//     }
// }

// readFileFunction("node files/greeting.txt")

// async function openANewFile() {
//     try{
//         const dataToWrite = "SN, Name, Age"
//         await fs.writeFile("node files/data.csv", dataToWrite)
//     }
//     catch(error){
//         console.log(`An error occured trying to write to file: ${error.message}`);
//     }
    
// }


// const addToList = async (sn, name, age) => {
//     try{
//         const dataToAdd = `\n ${sn} ${name} ${age}`
//         await fs.writeFile("node files/data.csv", dataToAdd, {flag: "a"})
//     }
//     catch(err){
//         console.log(`Error writing file: ${err}`);
//     }
// }

// const fileTodelete = async (filePath) => {
//     try{
//         fs.unlink(filePath)
//         console.log(`file deleted`);
//     }
//     catch(err){
//         console.log(`error deleting file: ${err.message}`);
//     }

// }

// const moveFileToNewLocation = async (source, destination) => {
//     try{
//         await fs.rename(source, destination)
//         console.log(`moved file from ${source} to ${destination} `);
//     }
//     catch(e){
//         console.log(`An error occured trying to move file ${e.message}`);
//     }
// }
// // just moved and renamed file 
// moveFileToNewLocation("node files/greeting.txt", "fs-moved-file/movedFile.txt")

// (async function(){
//     await openANewFile()
//     await addToList(1, "Awonugba seun", 27)
//     await fileTodelete("node files/data.csv")
// })()

//read file function
console.log("1. Starting to read file");
async function myReadFileFunction(filePath){
    try{
        const fileToRead = await fs.readFile(filePath)
        console.log("2. Reading file");
        console.log(fileToRead);
    }catch(e){
        console.log(`An error occured ${e.message}`);
    }
}   
console.log("3. Done reading file");

myReadFileFunction("node files/sample.txt")