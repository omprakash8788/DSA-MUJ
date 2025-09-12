// Prototype & Inheritance

function Person(name) {
  this.name = name;
}
Person.prototype.sayHi = function() {
  console.log(`Hi, I'm ${this.name}`);
};

const p1 = new Person("Om");
p1.sayHi(); // Hi, I'm Om


// ⚡ Hack: Object.create
const proto = { greet() { console.log("Hello!"); } };
const obj = Object.create(proto);
obj.greet(); // Hello!

