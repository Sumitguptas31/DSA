//GLOBAL OBJECTS:
// Global Objects are built-in objects that are part of the JavaScript 
// and can be used directly in the application without importing any particular module. 

//The process object in Node.js is a global object that can be accessed inside any module without requiring it. There are very few global objects or properties provided in Node.js and process is one of them.
// It is an essential component in the Node.js ecosystem as it provides various information sets about the runtime of a program.


//it contains current node.js details
//process is one of the object which has access all the node.js process

// *********** process object has "on()" method where you can execute events,related to the ongoing "process"
// process.on('exit', code => {
// 	setTimeout(() => {
// 		console.log('Will not get displayed');
// 	}, 0);

// 	console.log('Exited with status code:', code);
// });
// console.log('Execution Completed');

// process.stdout.write('Hello World!' + '\n');

// process.argv.forEach(function(val, index, array) {
// 	console.log(index + ': ' + val);
// });

console.log(global)