
const person = {
    name: "Alice",
  };
  
  function sayHello(greeting) {
    console.log(greeting + ", " + this.name);
  }
  sayHello.call(person, "Hi");// Output: Hi, Alice
  sayHello.apply(person, ["Hello"]);//Output: Hello, Alice
  
  const greet = sayHello.bind(person, "Hey");
  greet(); // Output: Hey, Alice