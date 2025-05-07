const map = new Map();
map.set('name', 'Alice');
map.set('age', 25);
map.set(1, 'number key');
map.set(true, 'boolean key');


// Get values
console.log(map.get('name')); // Alice
console.log(map.get(1));      // number key

//Check if a key exists
console.log(map.has('age')); // true
console.log(map.has('gender')); // false

// Delete a key
map.delete('age');
console.log(map.has('age')); // false

//Get size of map
console.log(map.size); 

//Iterate over keys and values
for (let [key, value] of map) {
    console.log(`${key} => ${value}`);
}
  
