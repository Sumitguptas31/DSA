

//Example 1:-
console.log(" number 1")
setTimeout(() => {
    console.log("number 2")
}, 1000);
console.log("number 3")


//Example 2:-
console.log("hello stack")

setTimeout(() => {
    console.log("macro task is executed")
}, 0);

const myPromise= new Promise((resolve, reject) => {
    console.log("micro task is executed")           //first priority
})                                         

// myPromise
// .then((value)=>{
// console.log(value)
// })
// .catch((error)=>{console.log(error)})









//Example 3:-

// console.log('stack [1]');
// setTimeout(() => console.log("macro [2]"), 0);
// setTimeout(() => console.log("macro [3]"), 1);

// const p = Promise.resolve();
// for(let i = 0; i < 3; i++) p.then(() => {
//     setTimeout(() => {
//         console.log('stack [4]')
//         setTimeout(() => console.log("macro [5]"), 0);
//         p.then(() => console.log('micro [6]'));
//     }, 0);
//     console.log("stack [7]");
// });

// console.log("macro [8]");