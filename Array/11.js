//Implement linear search in an array.

function linearSearch(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            return i; // Return index if found
        }
    }
    return -1; // Return -1 if not found
}

// Example usage
const numbers = [10, 20, 30, 40, 50];
const target = 30;
const result = linearSearch(numbers, target);

console.log(result !== -1 ? `Element found at index ${result}` : "Element not found");
