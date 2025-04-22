//function arguments: function arguments are value pass to the function or received to the function

//only traditional function has arguments
let s= function(a,b,c){
  console.log(arguments)
}
s(2,4,5)

// arrow function has no arguments

let t= (a,b,c)=>{
console.log(arguments)
}
t(3,4,5)