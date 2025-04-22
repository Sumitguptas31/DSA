
//Lexical Environment: whenever execution context is created lexical environment is also created.
// lexical environment is the local memory and along with the lexical environment of it's parent
//there is no outer lexical environment for the global scope, the outer lexical environment is set to null.

function a(){
    var b=10
    c()
     function c(){
        console.log(b)
    }
}
a()

function x(){
    let d=3
    y()
    function y(){
        let c=10
        z()
        function z(){
            let a=5
            console.log(a*c*d)
        }
    }
}
x()

//z function lexically inside y function
//y function lexically inside x function
// x is lexically inside global scope