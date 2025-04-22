// Variable Environment-
// The variable environment is a representation of the lexical environment’s local memory.
// In the environment record, the lexical environment stores variables as well as other information 
// such as the infamous this.


//Example:

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