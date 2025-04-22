// Move Zeros to end

//1. we will run loop  and find Zero on array for that zero index we will assign to j
//2. if j is still -1 means no zero found on array so return array
//3. we again run loop this time loop will start from j+1 index if any non Zero element found then replace with j index.
function MoveToZero(arr){
    let n= arr.length
    let j=-1
    for(let i=0;i<n;i++){
        if(arr[i]===0){
            j=i;
            break;
        }
    }
    if(j===-1){
        return arr
    }
    for(let i=j+1;i<n;i++){
        if(arr[i]!==0){
            let temp= arr[j]
            arr[j]=arr[i]
            arr[i]=temp
            j++;
        }
    }
    return arr
}
let arr=[45,0,34,0,21,4,0,4,3,0,0,0,43,24]
console.log(MoveToZero(arr))