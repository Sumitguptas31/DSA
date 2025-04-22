//Function Scope: When a variable is declared inside a function,
// it is only accessible within that function and cannot be used outside that function.

//Block Scope: A variable when declared inside the if or switch conditions or inside for or while loops,
// are accessible within that particular condition or loop.

function scope(){
    let a=5
    if(a==5){
        var b=7
        let c=8
        console.log(a+b+c)
    }
}
scope()

//here a,b has functional scope
// c has block scope