 //call: it is used to involke a function directly by passing in a refference which points to the "this" variable 
//inside the function


//Example1:
let obj={
    firstname:"sumit",
    lastname:"gupta",
    myFunction: function(){
        console.log(this.firstname+" "+this.lastname)
    }
}

obj.myFunction.call(obj)

//Example2:
let obj2={
    name:"amit",
    address:"bihar"
}

function newfunction(){
  console.log(this.name+" "+this.address)
}
newfunction.call(obj2)

//Example3:
let obj3={
    name:"rohit",
    home:"delhi",
   
}

function function2(state,district){
 console.log(this.name+" "+this.home+" "+state+" "+district)
}

function2.call(obj3,"bihar","samastipur")



// 1.Call apply and bind method:

// **** call() Method *********************
// Calls the function immediately
// Passes arguments one by one

const person = {
  name: "Alice",
};

function sayHello(greeting) {
  console.log(greeting + ", " + this.name);
}
sayHello.call(person, "Hi");
// Output: Hi, Alice

// **** apply () Method *********************

// Calls the function immediately
// Passes arguments as an array

sayHello.apply(person, ["Hello"]);
// Output: Hello, Alice


// **** bind () Method *********************
// Does NOT call the function immediately
// Returns a new function with this set to what you want

const greet = sayHello.bind(person, "Hey");
greet(); // Output: Hey, Alice

