//Find the k largest and k smallest elements in an array.
function sortArray(arr) {
    let n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                // Swap elements
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}

function findKSmallestAndKLargest(arr, k) {
    if (k > arr.length) return "K is larger than the array size";
    
    let sortedArr = sortArray([...arr]); // Sort the array without modifying the original
    
    let kSmallest = sortedArr.slice(0, k);
    let kLargest = sortedArr.slice(-k);
    
    return { kSmallest, kLargest };
}

// Example usage
let arr = [7, 2, 9, 1, 5, 3, 8, 6, 4];
let k = 3;
console.log(findKSmallestAndKLargest(arr, k));
