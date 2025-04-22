// Lexical Environment 
function outer() {
    let a = 10;
  
    function inner() {
      console.log(a); // inner can access 'a' from outer
    }
  
    inner();
  }
  outer();
//Here, inner() has access to variable a because it was written inside outer().
// That’s because of the lexical environment chain.  

// Lexical Environment = Local variables + link to outer scope.
// Let me know if you want a visual or a deeper explanation!