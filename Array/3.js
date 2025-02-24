//Reverse an array in place.
function reverseArray(arr) {
for(let i=0;i<Math.floor(arr.length/2);i++){
  let temp=arr[i]
  arr[i]=arr[arr.length-1-i]
  arr[arr.length-1-i]=temp
}
return arr
}

let array = [1, 2, 3, 4, 5];
console.log(reverseArray(array)); 
