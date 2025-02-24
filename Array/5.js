//Rotate an array to the right by k positions.

function rotateArray(arr, k) {
    const n = arr.length;
    if (n === 0 || k <= 0) return arr; // No rotation needed for empty array or non-positive k

    k = k % n; // Handle cases where k is greater than array length
    let result = [];

    // Fill the rotated array
    for (let i = 0; i < n; i++) {
        result[(i + k) % n] = arr[i];
    }

    // Copy the result back to the original array
    for (let i = 0; i < n; i++) {
        arr[i] = result[i];
    }

    return arr;
}

// Example usage
const arr = [1, 2, 3, 4, 5];
const k = 2;
console.log(rotateArray(arr, k)); // Output: [4, 5, 1, 2, 3]
