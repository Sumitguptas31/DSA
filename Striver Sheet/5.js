//Left Rotate an array by one place
// 1. Store the first element of the array in a temporary variable (temp).
// 2. Shift all elements one position to the left (i.e., move arr[i] to arr[i - 1]).
// 3. After the loop, put temp value at the last index of the array.

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