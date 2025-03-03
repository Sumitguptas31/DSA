//Find the subarray with the given sum.
function findSubarray(arr, target) {
    let start = 0, sum = 0;

    for (let end = 0; end < arr.length; end++) {
        sum += arr[end];  // Expand the window

        while (sum > target && start <= end) {  
            sum -= arr[start];  // Shrink the window
            start++;
        }

        if (sum === target) {  
            // Manually create the subarray
            let result = [];
            for (let i = start; i <= end; i++) {
                result.push(arr[i]);
            }
            return result;
        }
    }
    return [];  // If no subarray found
}

// Example:
console.log(findSubarray([1, 2, 3, 7, 5], 12));  // Output: [2, 3, 7]
