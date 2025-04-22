//Find missing number in an array
//first approach:
//1. we will find out 1 to n number sum
//2. we will sum of all the linear elements of the array
//3. subtract of total sum - arr elements sum we will get missing number in an array.
function FindMissingNumber(arr,n){
  let totalSum=(n*(n+1))/2
  let arrSum=0
  for(let i=0;i<arr.length;i++){
    arrSum=arrSum+arr[i]
  }
  return totalSum-arrSum
}

let n=6
let arr=[1,2,3,4,6]
console.log(FindMissingNumber(arr,n)) 

//second approach: Need to work on it.
