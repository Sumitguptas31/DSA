//Right rotate an array by D places

//Notes: to approach this problem we will first reverse the last dth element then reverse from 0 to last dth element -1 index. then will reverse whole array

function RotateArray(array,D){
    let n=arr.length;
     D=D%n
     console.log("D",D)
    if(n==0||D==0){
       return array
    }
    //reverse from last n-D element
    ReverseArray(array,n-D,n-1)
    // reverse from 0 to n-D
    ReverseArray(array,0,n-D-1)
    // reverse the full array
    ReverseArray(array,0,n-1)
    return array
} 

function ReverseArray(array,i,j){
    while(i<=j){
       let temp=array[i]
       array[i]=array[j]
       array[j]=temp
       i++
       j--
    }
    return array
}
let arr=[1, 2, 3, 4, 5, 6]
console.log(RotateArray(arr,2))
   