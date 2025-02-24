//Count the number of occurrences of an element in a sorted array.

function countOccurrences(arr, target) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            count++;
        }
    }
    return count;
}

// Example usage:
const arr = [1, 2, 2, 2, 3, 3, 4, 5, 6];
const target = 2;
console.log(countOccurrences(arr, target)); // Output: 3


//anohter approach with o(nlogn) otpimise with binary search:
// function countOccurrencesBinary(arr, target) {
//     function findFirst(arr, target) {
//         let low = 0, high = arr.length - 1, result = -1;
//         while (low <= high) {
//             let mid = Math.floor((low + high) / 2);
//             if (arr[mid] === target) {
//                 result = mid;
//                 high = mid - 1;  // Move left
//             } else if (arr[mid] < target) {
//                 low = mid + 1;
//             } else {
//                 high = mid - 1;
//             }
//         }
//         return result;
//     }

//     function findLast(arr, target) {
//         let low = 0, high = arr.length - 1, result = -1;
//         while (low <= high) {
//             let mid = Math.floor((low + high) / 2);
//             if (arr[mid] === target) {
//                 result = mid;
//                 low = mid + 1;  // Move right
//             } else if (arr[mid] < target) {
//                 low = mid + 1;
//             } else {
//                 high = mid - 1;
//             }
//         }
//         return result;
//     }

//     const first = findFirst(arr, target);
//     if (first === -1) return 0; // Element not found

//     const last = findLast(arr, target);
//     return last - first + 1;
// }

// // Example usage:
// const arr2 = [1, 2, 2, 2, 3, 3, 4, 5, 6];
// const target2 = 2;
// console.log(countOccurrencesBinary(arr2, target2)); // Output: 3
