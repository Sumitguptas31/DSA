//Left Rotate an array by one place

function leftRotateArr(arr){
    let temp= arr[0]
    for(let i=1;i<arr.length;i++){
        arr[i-1]=arr[i]
    }
    arr[arr.length-1]=temp
    return arr;
}

let arr=[1,2,3,4,5]
console.log(leftRotateArr(arr))