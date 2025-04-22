
// const promise= new Promise((resolve,reject)=>{
//     let a=true
//     setTimeout(() => {
//         return a? resolve("resolved"):reject("rejected")
//     }, 1000);
// })
// promise
// .then(value=>{console.log(value)})
// .catch(err=>{console.log(err)})



// const myPromise= new Promise((resolve,reject)=>{
//     let name="sumit"
//     if(name){
//         resolve("resolved")
//     }
//     else{
//         reject("rejected")
//     }
// })
// myPromise
// .then(value=>{console.log(value)})
// .catch(err=>{console.log(err)})


// const promise2= new Promise((resolve, reject) => {
//     let a=56
//     if(a%2==0){
//         resolve("resolved")
//     }
//     else{
//         reject("rejected")
//     }
// })
// promise2
// .then(value=>{console.log(value)})
// .catch(err=>{console.log(err)})

// function promise5() {
//    return new Promise((resolve, reject) => {
//     let a=4
//     if(a==4){
//         resolve("resolved is promise")
//     }
//     else{
//         reject("reject is  promise")
//     }
// })
// }

// // promise5
// // .then(value=>{console.log(value)})
// // .catch(error=>{console.log(error)})

// // let asyncawait = async()=>{
// //    let promise= await promise5()
// //    console.log(promise)
// // }
// // asyncawait()
// const myPromise= new Promise((resolve, reject) => {
//     let a=true
//     setTimeout(() => {
//         return a?resolve("promise resolved") : reject("promise rejected")
//     }, 2000);
//     console.log("promise")
// })
// promise
// .then((value)=>{console.log(value)})
// .catch((error)=>{console.log(error)})
const myPromise= new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("hello")
        }, 1000);
    })

myPromise
.then((value)=>{
    console.log(value)
})
.catch((error)=>{console.log(error)})

// const asy= async()=>{
//      asyValue= await myPromise()
//     console.log(asyValue) 
// }

// asy()