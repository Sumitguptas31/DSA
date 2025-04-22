//Remove Duplicates in-place from Sorted Array
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

  