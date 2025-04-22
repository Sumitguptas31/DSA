//A global variable is a variable that is declared in the global scope in other words, 
//a variable that is visible from all other scopes. In JavaScript it is a property of the global object.
let a=true
function global(){
    if(a==true){
        console.log("true")
    }
    else{
        console.log("false")
    }
}
global()

//here variable a is a global variable because it's declared in a global scope