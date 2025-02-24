//Implement binary search in a sorted array.
function binarySearch(arr, target) {
    let low = 0;
    let high = arr.length - 1;

    while (low <= high) {
        const mid = Math.floor((low + high) / 2);

        if (arr[mid] === target) {
            return mid; // Return the index of the target element
        } else if (arr[mid] < target) {
            low = mid + 1; // Target is in the right half
        } else {
            high = mid - 1; // Target is in the left half
        }
    }

    return -1; // Target not found
}

// Example usage:
const arr = [1, 3, 5, 7, 9, 11, 13, 15];
const target = 7;
const result = binarySearch(arr, target);

console.log(result); // Output: 3 (index of 7)
