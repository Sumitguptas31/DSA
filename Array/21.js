// Find the subarray with the maximum sum (Kadane’s Algorithm).
function maxSubarray(arr) {
    let maxSum = -Infinity, currentSum = 0;
    let start = 0, end = 0, tempStart = 0;

    for (let i = 0; i < arr.length; i++) {
        currentSum += arr[i];

        if (currentSum > maxSum) {
            maxSum = currentSum;
            start = tempStart;
            end = i;
        }

        if (currentSum < 0) {
            currentSum = 0;
            tempStart = i + 1;
        }
    }

    return { maxSum, subarray: arr.slice(start, end + 1) };
}

// Example Usage
let result = maxSubarray([-2, 1, -3, 4, -1, 2, 1, -5, 4]);
console.log(result);  
// Output: { maxSum: 6, subarray: [4, -1, 2, 1] }
