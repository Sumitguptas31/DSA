//pure function
//pure function is the function that accept an input and return a value without modifying any data outside it's scope.
//it is predictable and without side effects
//side-effect= don't modify any variable
//it gives the same output everytime

//Example:
function pure(x){
    return x+1
}
 console.log(pure(4))


//impure function
//impure function gives different output everytime and it's unpredictable and it's side effect is it modify the variable outside the scope.
//Example:
var x=3
function impure(){
    console.log(x);
     x++;
}
impure()
impure()
impure()
impure()

//Example 2
let y = 2;
const add = (z) => {
  y += z;
  return y;
};

console.log(add(4)); // y === 6 (the first time)
console.log(add(4));// y==10 (second time)
console.log(add(4)); //y==14 (third time)
console.log(add(4));  //y==18 (fourth time)