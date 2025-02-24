//Remove duplicate elements from an array.

function removeDuplicates(arr) {
    let unique = []; // Array to store unique elements

    for (let i = 0; i < arr.length; i++) {
        let isDuplicate = false;

        // Check if the element already exists in the unique array
        for (let j = 0; j < unique.length; j++) {
            if (arr[i] === unique[j]) {
                isDuplicate = true;
                break;
            }
        }

        // If the element is not a duplicate, add it to the unique array
        if (!isDuplicate) {
            unique.push(arr[i]);
        }
    }

    return unique;
}

// Example usage
const arr = [1, 2, 3, 2, 4, 1, 5];
const result = removeDuplicates(arr);
console.log(result); // Output: [1, 2, 3, 4, 5]

