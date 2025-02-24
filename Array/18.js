//Sort an array using quicksort.

function quickSort(arr) {
    if (arr.length <= 1) return arr; // Base case

    let pivot = arr[arr.length - 1]; // Choosing the last element as pivot
    let left = [], right = [];

    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] < pivot) {
            left.push(arr[i]);  // Elements smaller than pivot
        } else {
            right.push(arr[i]); // Elements greater than or equal to pivot
        }
    }

    return [...quickSort(left), pivot, ...quickSort(right)];
}

// Example Usage
let array = [12, 11, 13, 5, 6, 7];
console.log(quickSort(array)); // Output: [5, 6, 7, 11, 12, 13]
