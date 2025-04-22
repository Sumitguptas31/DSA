//Check if an Array is Sorted
function isSorted(arr) {
  for(let i=0;i<arr.length;i++){
    if(arr[i]>arr[i+1]){
        return false
    }
  }
  return true
}
const arr = [1, 2, 3, 4, 5,1,4];
console.log(isSorted(arr) ? "True" : "False");
  
  