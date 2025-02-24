//Sort an array using the bubble sort algorithm.

function bubbleSort(arr) {
    let swapped = true; // Assume the array is unsorted initially
    let n=arr.length
    while (swapped) {
        swapped = false;
        for (let i = 0; i < n- 1; i++) {
            if (arr[i] > arr[i + 1]) {
                // Swap arr[i] and arr[i+1]
                [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
                swapped = true;
            }
        }
        n--; // Reduce the range after each pass
    }

    return arr;
}

// Example usage
const arr = [64, 34, 25, 12, 22, 11, 90];
console.log("Sorted Array:", bubbleSort(arr));
