// Find the smallest element in an array.

function smallest(arr){
    let smallestNum=arr[0]
    for(let i=1;i<arr.length;i++){
        if(arr[i]<smallestNum){
            smallestNum=arr[i]
        }
    }

    
    return smallestNum
}
console.log(smallest([11,2,3,2,1,20]))