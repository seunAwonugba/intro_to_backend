/**
 * To start installing npm dependencies into your project, you first of all need to add the package.json file or initiate npm
 * it serves as a manifest file that stores important info about our project,
 * 
 * you install it using npm init or npm init 
 * 
 * 
 * when u use 3rd party modules like this , befor you push your code to git
 * 
 * create a .gitignore file so that you will place the node modules in it
 * 
 * the .gitignore file just contains file path of what u want to ignore
 * 
 * so lets say i want to ignore the "node files" folder
 * 
 * inside my .gitignore file
 * first line
 * ../node files
 * 
 * so remember you must always .gitignore the node modules file thats is created when you use a third party library
 * 
 * So what happens when i ignore node modules and push to git and someone else clones my project, that does not contain the node module
 * 
 * first thing when you clone a node project, go to the package.json file
 * See all the dependencies installed in the dependencies object, if the are much or not
 * 
 * just run npm install, what it does is that it installes all dependencies in the dependency section
 * 
 * To uninstall a package or dependency, simply npm uninstall package_name
 * 
 */