//Sort an array using the selection sort algorithm.

function selectionSort(arr) {
    const n = arr.length;
    
    for (let i = 0; i < n - 1; i++) {
      // Find the minimum element in unsorted part of the array
      let minIndex = i;
      
      for (let j = i + 1; j < n; j++) {
        if (arr[j] < arr[minIndex]) {
          minIndex = j;
        }
      }
  
      // Only swap if the minimum element is not already in the current position
      if (minIndex !== i) {
        let temp = arr[i];
        arr[i] = arr[minIndex];
        arr[minIndex] = temp;
      }
    }
    return arr;
  }
  
  // Example usage:
  const arr = [64, 25, 12, 22, 11];
  console.log("Sorted array:", selectionSort(arr));
  