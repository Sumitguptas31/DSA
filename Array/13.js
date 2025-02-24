//Find the first and last occurrence of an element in a sorted array.

function findFirstAndLast(arr, target) {
    // Helper function to find the first occurrence
    function binarySearchFirst(arr, target) {
        let low = 0, high = arr.length - 1, result = -1;
        while (low <= high) {
            const mid = Math.floor((low + high) / 2);
            if (arr[mid] === target) {
                result = mid;
                high = mid - 1;  // Search the left half
            } else if (arr[mid] < target) {
                low = mid + 1;
            } else {
                high = mid - 1;
            }
        }
        return result;
    }

    // Helper function to find the last occurrence
    function binarySearchLast(arr, target) {
        let low = 0, high = arr.length - 1, result = -1;
        while (low <= high) {
            const mid = Math.floor((low + high) / 2);
            if (arr[mid] === target) {
                result = mid;
                low = mid + 1;  // Search the right half
            } else if (arr[mid] < target) {
                low = mid + 1;
            } else {
                high = mid - 1;
            }
        }
        return result;
    }

    const first = binarySearchFirst(arr, target);
    const last = binarySearchLast(arr, target);

    return [first, last];
}

// Example usage:
const arr = [1,1,2, 2, 2, 2, 3, 3, 4, 5, 6];
const target = 2;
const result = findFirstAndLast(arr, target);

console.log(result);  // Output: [1, 3]
