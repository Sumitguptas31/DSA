//Find the frequency of each element in an array.
function findFrequencies(arr) {
    let frequency = {}; // Object to store element frequencies

    for (let i = 0; i < arr.length; i++) {
        let element = arr[i];
        // Check if the element is already in the frequency object
        if (frequency[element] === undefined) {
            frequency[element] = 1; // Initialize count if element not found
        } else {
            frequency[element]++; // Increment count if element already exists
        }
    }

    return frequency;
}

// Example usage
const arr = [1, 2, 3, 2, 1, 4, 1];
const result = findFrequencies(arr);
console.log(result); // Output: { '1': 3, '2': 2, '3': 1, '4': 1 }
