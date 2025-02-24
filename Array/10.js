//Find the union and intersection of two arrays.

function union(arr1, arr2) {
    let result = [];
    let set = {};
  
    // Add all elements from the first array to the result
    for (let i = 0; i < arr1.length; i++) {
      if (!set[arr1[i]]) {
        result.push(arr1[i]);
        set[arr1[i]] = true;
      }
    }
  
    // Add elements from the second array, only if not already in the set
    for (let j = 0; j < arr2.length; j++) {
      if (!set[arr2[j]]) {
        result.push(arr2[j]);
        set[arr2[j]] = true;
      }
    }
  
    return result;
  }
  
  function intersection(arr1, arr2) {
    let result = [];
    let set = {};
  
    // Add all elements of the first array to the set
    for (let i = 0; i < arr1.length; i++) {
      set[arr1[i]] = true;
    }
  
    // Check for common elements in the second array
    for (let j = 0; j < arr2.length; j++) {
      if (set[arr2[j]]) {
        result.push(arr2[j]);
        // Remove the element from the set to avoid duplicates
        delete set[arr2[j]];
      }
    }
  
    return result;
  }
  
  // Example usage
  const array1 = [1, 2, 4, 5];
  const array2 = [2, 3, 5, 7];
  
  console.log("Union:", union(array1, array2)); // Output: [1, 2, 4, 5, 3, 7]
  console.log("Intersection:", intersection(array1, array2)); // Output: [2, 5]
  