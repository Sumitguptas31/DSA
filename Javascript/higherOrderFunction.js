//higher order function:-
//a function which takes another function as an argument or returns a function is known as a higher order function.
// or The functions that use other functions as arguments or return functions are named higher-order functions.

// A. Assign to variables
const hiFunction = function() { // first order function  :On the other side, the functions that use only primitives or objects as arguments, and only return primitives or objects are named first-order functions.
    return 'Hello!' 
  };
  console.log(hiFunction()); // => 'Hello!'

  //B. Use functions as arguments to other functions:
// Use as arguments
function iUseFunction(func) {
  return func();
}
console.log(iUseFunction(function () { return 578578783 })) 

//C. And even return functions from functions:

function iReturnFunction() {
    return function() { return 42 };
  }
  const myFunc = iReturnFunction();
  console.log(myFunc()); // => 42

