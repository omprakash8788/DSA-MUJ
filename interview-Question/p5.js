// To know more about 'this' key word
// Object Methods:
// Create objects with methods and call these methods to see how this refers to the object itself.
// Experiment with nested objects and methods to understand the this context at different levels.
    const person = {
      name: "Alice",
      phone:8888,
      greet: function() {
        console.log(`Hello, my name is ${this.name} ${this.phone}`);
      }
    };
    person.greet(); // 'this' refers to 'person'

    // In JavaScript, the this keyword refers to the object to which it belongs or the object that is currently executing the code. Its value is dynamic and depends on the context in which a function is called.