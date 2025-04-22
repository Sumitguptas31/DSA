//common js module

// CommonJS modules are characterized by the require() statement for module imports and module.exports for module exports.

//Es Module:-
// Older Node.js versions don’t support ES modules
// Newer Node.js versions fully support ES modules
//For example, this is a CommonJS module that exports two functions:
module.exports.add = function(a, b) {
    return a + b;
} 

module.exports.subtract = function(a, b) {
    return a - b;
} 

//We can also import the public functions into another Node.js script using require(), just as we do here:

const {add, subtract} = require('./util')

console.log(add(5, 5)) // 10
console.log(subtract(10, 5)) // 5

//ES modules are the standard for JavaScript, while CommonJS is the default in Node.js


//****CommonJS offers flexibility with module imports********
//In an ES module, the import statement can only be called at the beginning of the file.But require() can be called anywhere in the code.
// For example, you can call require() inside a conditional statement like so:
// if(user.length > 0){
//     const userDetails = require(‘./userDetails.js’);
//    // Do something ..
//  }

//******CommonJS loads modules synchronously, ES modules are asynchronous*********
//One of the limitations of using require() is that it loads modules synchronously. This means that modules are loaded and processed one by one.
//As you might have guessed, this can pose a few performance issues for large-scale applications that hundreds of modules. In such a case, import might outperform require() based on its asynchronous behavior.
// the synchronous nature of require() might not be much of a problem for a small-scale application using a couple of modules.