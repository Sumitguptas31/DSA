//async and await: async return a promise and await will wait till promise will resolve or reject

function myPromise(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("resolved")
        }, 2000);
    })
}

let asyncFunction=async()=>{
    console.log("calling async function")
    result= await myPromise()
    console.log(result)
    console.log("successfully")
}
asyncFunction()