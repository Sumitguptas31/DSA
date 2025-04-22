//apply: apply method is same like call method, the difference is it takes  arguments in array list as
// a parameter which needs to pass to the function

let obj={
    name:"sumit",
    home:"delhi"
}

function myFunction(district,state){
    console.log(this.name+" "+this.home+" "+district+" "+state)
}
myFunction.apply(obj,["samastipur","bihar"])