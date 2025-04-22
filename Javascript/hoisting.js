//hoisting: we can use any variable or function before it's declaration
//we can do hoisting with var variable only, with let and const it will not work

//Examples

hoist="hoisted variable"
console.log(hoist)
var hoist=4 //declaration hoisted to the top but initialization not

random()
function random(){
    console.log("hello javascript")
}

//function expression and class expression are not hoisted
myhoist()
let myhoist=()=>{
    console.log("hoisted fucntion")
}