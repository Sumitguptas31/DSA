//Find the second largest and second smallest elements in an array.

function findSecondLargestAndSmallest(arr) {
    if (arr.length < 2) {
        return "Array should have at least two distinct elements.";
    }

    let largest = -Infinity;
    let secondLargest = -Infinity;
    let smallest = Infinity;
    let secondSmallest = Infinity;

    for (let i = 0; i < arr.length; i++) {
        let num = arr[i];

        // Check for largest and second largest
        if (num > largest) {
            secondLargest = largest;
            largest = num;
        } else if (num > secondLargest && num < largest) {
            secondLargest = num;
        }
        // i am greater than you
        // Check for smallest and second smallest
        if (num < smallest) {
            secondSmallest = smallest;
            smallest = num;
        } else if (num < secondSmallest && num > smallest) {
            secondSmallest = num;
        }
    }

    if (secondLargest === -Infinity || secondSmallest === Infinity) {
        return "Array does not have enough distinct elements.";
    }

    return { secondLargest, secondSmallest };
}

// Example usage
const arr = [12, 35, 1, 10, 34, 1];
const result = findSecondLargestAndSmallest(arr);
console.log(result); // Output: { secondLargest: 34, secondSmallest: 10 }
