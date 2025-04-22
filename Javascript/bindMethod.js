//Bind: Bind is a function that helps you create another function that you can execute later 
//with the new context of this that is provided.

let obj={
    name:"sumit",
    address:"delhi"
}

function myFunction(district,state){
    console.log(this.name+" "+this.address+" "+district+" "+state)
}

let newfunction=myFunction.bind(obj,"samastipur","bihar")

newfunction()