// Two Sum : Check if a pair with given sum exists in Array: return indexes
function twoSum(n, arr, target) {
    const ans = [-1, -1];
    const map = new Map();

    for (let i = 0; i < n; i++) {
        const num = arr[i];
        const moreNeeded = target - num;

        if (map.has(moreNeeded)) {
            ans[0] = map.get(moreNeeded);
            ans[1] = i;
            return ans;
        }

        map.set(num, i);
    }

    return ans;
}

// Example usage:
const n = 5;
const arr = [2, 6, 5, 8, 11];
const target = 14;
const ans = twoSum(n, arr, target);

console.log(`This is the answer for variant 2: [${ans[0]}, ${ans[1]}]`);


