//Type coercion is the automatic or implicit conversion of values from one data type to another

// Number
let a=Number("42");
console.log(a)
let b=Number(""); 
console.log(b)
let c=Number(true);
console.log(c)
let d=Number(false);
console.log(d)
let e=Number(null);
console.log(e)
let f=Number(undefined)
console.log(f)

// string
let x=String("42");
console.log(x)
let y=String(true);
console.log(y)
let z=String(false); 
console.log(z)
let m=String(null);
console.log(m)
let n=String(undefined); 
console.log(n)

console.log(11+"23")
console.log(0.988+"45")
console.log("0.877"+23)
console.log(2+4+"89")

// Boolean:
console.log(Boolean(''))
console.log(Boolean(0))
console.log(Boolean(-0))
console.log(Boolean(NaN))
console.log(Boolean(null))
console.log(Boolean(undefined))
console.log(false)

console.log((true&&false) )
console.log((true&&true))
console.log((true||false))
console.log((true||!false))
console.log(("sumit"||0))
console.log(("sumit"||[]))
console.log((""||[1,2,3]))