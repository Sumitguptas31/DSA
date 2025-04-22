//Longest Subarray with given Sum K(Positives) 
// let a = [2, 3, 5, 1, 9];
// let k = 10;
// we will check two condition if sum>k or sum ==k if both not then next element add to sum.
function getLongestSubarray(a, k) {
    let n = a.length; 

    let left = 0, right = 0; 
    let sum = a[0]; 
    let maxLen = 0;  
    while (right < n) {  
        while (left <= right && sum > k) { 
            sum = sum - a[left];
            left++;
        }
        if (sum === k) {          
            maxLen = Math.max(maxLen, right - left + 1); 
        }
        right++;  
        if (right < n){ 
            sum = sum + a[right]; 
        } 
    }
    return maxLen; 
}

let a = [2, 3, 5, 1, 9];
let k = 10;
let len = getLongestSubarray(a, k);
console.log("The length of the longest subarray is:", len);





