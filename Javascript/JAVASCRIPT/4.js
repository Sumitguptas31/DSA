// write a promise 
const promise= new Promise((resolve,reject)=>{
    let success=false;
    if(success){
        resolve("promise is resolve")
    }
    else{
        resolve("promise is reject")
    }
})
.then((message)=>console.log(message))
.catch((message)=>console.log(message))
  