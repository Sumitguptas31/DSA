//Remove Duplicates in-place from Sorted Array
// 1. Initialize two pointers: i = 0 (points to the last unique element), j = 1 (used to scan the array).
// 2. Traverse the array with j. For each element:
//    - If arr[j] is not equal to arr[i], it means a new unique element is found.
//    - assign arr[j] to arr[i+1] and Increment i (i.e., place the unique element at the next position).
// 3. Continue this process until the end of the array.
// 4. After the loop, the first (i + 1) elements of the array are the unique values.
// 5. Return (i + 1) as the count of unique elements.

function removeDuplicates(arr){
  let i=0;
  for(let j=1;j<arr.length;j++){
    if(arr[i]!==arr[j]){
      arr[i+1]=arr[j]
      i++;
    }
  }
  return i+1
}
  const arr = [1, 1, 2, 2, 2, 3, 3,5,6,7,7];
  const k = removeDuplicates(arr);
  console.log("The array after removing duplicate",k);

  