setTimeout(() => {
  console.log("Macrotask - setTimeout");
}, 0);

Promise.resolve().then(() => {
  console.log("Microtask - Promise");
});


