//Rotate an array to the left by k positions.
function rotateLeft(arr, k) {
    let n = arr.length;
    k = k % n; // Normalize k if it's greater than the array length

    // Create a new array to store the rotated result
    let rotated = [];

    // Copy elements from index k to the end
    for (let i = k; i < n; i++) {
        rotated.push(arr[i]);
    }

    // Copy elements from the start to index k-1
    for (let i = 0; i < k; i++) {
        rotated.push(arr[i]);
    }

    // Copy the rotated array back into the original array
    for (let i = 0; i < n; i++) {
        arr[i] = rotated[i];
    }

    return arr;
}

// Example
let array = [1, 2, 3, 4, 5];
let k = 2;
console.log(rotateLeft(array, k)); // Output: [3, 4, 5, 1, 2]
