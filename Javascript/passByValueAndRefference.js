//pass by value:

let a=19
let b=a
console.log(b)
b=b+10
console.log(a)
console.log(b)

//pass by reference

let obj={
    name:"sumit",
    address:"bihar",
    email:"sumit@gmail"
}
console.log("obj",obj)
let obj2=obj
console.log("obj2",obj2)
obj2.name="amit"
console.log("after change in obj2 value of obj is",obj)
console.log("after change in obj2 value of obj2 is",obj2)