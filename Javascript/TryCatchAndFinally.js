let a=20
let b=10

try{
    let c=a*b
    console.log(c)
}
catch(error){
    console.log(error.message)
}
finally{
    console.log("finally")
}