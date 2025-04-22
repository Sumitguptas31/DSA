//JavaScript Function Invocation is used to executes the function code and 
//it is common to use the term “call a function” instead of “invoke a function”.
// The code inside a function is executed when the function is invoked.

function myFunction(a) {
    console.log("hello")
    console.log(a)
}
myFunction(3);

var myObject = {
    name : "sumit",
    functionName: function () {
        return this.name;
    }
}
console.log(myObject.functionName())