// Two Sum : Check if a pair with given sum exists in Array: return yes or no
function twoSum(n, arr, target) {
    const map = new Map();

    for (let i = 0; i < n; i++) {
        const num = arr[i];
        const moreNeeded = target - num;

        if (map.has(moreNeeded)) {
            return "YES";
        }

        map.set(num, i);
    }
    return "NO";
}
// Example usage
const n = 5;
const arr = [2, 6, 5, 8, 11];
const target = 14;
const ans = twoSum(n, arr, target);

console.log("This is the answer for variant 1: " + ans);
