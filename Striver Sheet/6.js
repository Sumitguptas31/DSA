//Left rotate an array by D places
//Note: to approach this problem we will first reverse 0 to dth element-1 of array.
//  then dth element to last element of array . then whole array.

// function RotateArray(array,D){
//  let n=arr.length;
//   D=D%n
//   console.log("D",D)
//  if(n==0||D==0){
//     return array
//  }
//  //reverse from 0 to D of the array
//  ReverseArray(array,0,D-1)
//  // reverse from D to array ka length tak
//  ReverseArray(array,D,n-1)
//  // reverse the full array
//  ReverseArray(array,0,n-1)
//  return array
// }

// function ReverseArray(array,i,j){
//  while(i<=j){
//     let temp=array[i]
//     array[i]=array[j]
//     array[j]=temp
//     i++
//     j--
//  }
//  return array
// }

function RotateArray(arr,d){
   d=d%arr.length
   if(arr.length==0|| d==0){
      return arr
   }
   ReverseArrays(arr,0,d-1)
   ReverseArrays(arr,d,arr.length-1)
   ReverseArrays(arr,0,arr.length-1)
   return arr
}

function ReverseArrays(arr,i,j){
   while(i<j){
      let temp=arr[i]
      arr[i]=arr[j]
      arr[j]=temp
      i++
      j--
   }
   return arr
}
let arr=[1,2,3,4,5,6] 
console.log(RotateArray(arr,2))
