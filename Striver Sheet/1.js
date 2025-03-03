//Largest Element in Array
function findLargestElement(arr) {
   let largest=arr[0]
   for(let i=0;i<arr.length;i++){
     if(arr[i]>largest){
        largest=arr[i]
     }
   }
   return largest
}
  
  const arr1 = [2, 5, 1, 3, 0];
  let max = findLargestElement(arr1);
  console.log("The largest element in the array is: " + max);
  
  const arr2 = [8, 10, 5, 7, 9];
  max = findLargestElement(arr2);
  console.log("The largest element in the array is: " + max);
  
  