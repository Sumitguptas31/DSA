//Merge two sorted arrays.
function mergeSortedArrays(arr1, arr2) {
    let mergedArray = [];
    let i = 0, j = 0;
  
    // Traverse both arrays and pick the smaller element
    while (i < arr1.length && j < arr2.length) {
      if (arr1[i] < arr2[j]) {
        mergedArray.push(arr1[i]);
        i++;
      } else {
        mergedArray.push(arr2[j]);
        j++;
      }
    }
  
    // Add remaining elements of arr1 (if any)
    while (i < arr1.length) {
      mergedArray.push(arr1[i]);
      i++;
    }
  
    // Add remaining elements of arr2 (if any)
    while (j < arr2.length) {
      mergedArray.push(arr2[j]);
      j++;
    }
  
    return mergedArray;
  }
  
  // Example usage
  const array1 = [1, 3, 5];
  const array2 = [2, 4, 6];
  console.log(mergeSortedArrays(array1, array2)); // Output: [1, 2, 3, 4, 5, 6]
  