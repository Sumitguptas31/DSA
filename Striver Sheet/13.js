//Find the number that appears once, and other numbers twice in an array.
//  XOR Property:
// a ^ a = 0
// a ^ 0 = a
// to approach this every element is 2 times in array so a^a will be cancled and that single number will be left

function findSingleNumber(arr) {
  let result=0
  for(let i=0;i<arr.length;i++){
    result=result^arr[i]
  }
  return result
}

// Example usage
const nums = [2, 3, 5, 4, 5, 3, 4,2,1];
console.log(findSingleNumber(nums));  // Output
