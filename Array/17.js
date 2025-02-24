//Sort an array using the insertion sort algorithm.

function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        let key = arr[i];
        let j = i - 1;

        // Shift elements that are greater than key
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j--;
        }

        // Insert the key at the correct position
        arr[j + 1] = key;
    }
    return arr;
}

// Example Usage
let array = [12, 11, 13, 5, 6];
console.log(insertionSort(array)); // Output: [5, 6, 11, 12, 13]
