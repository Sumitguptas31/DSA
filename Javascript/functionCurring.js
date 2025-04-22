//before function curring
let sum=(a,b,c)=>{
    return a+b+c
}
console.log(sum(2,3,4))

//after function curring
let sum2=(a)=>{
  return (b)=>{
   return (c)=>{
        return a+b+c
   }
   }
}
console.log(sum2(2)(3)(5))

let sum3=(a)=>{
    return (b)=>{
        return (c)=>{
            return (d)=>{
                return a+b+c+d
            }
        }
    }
}
console.log(sum3(2)(3)(10)(10))