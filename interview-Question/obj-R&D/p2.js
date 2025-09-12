// 2. Add / Update / Delete

let person = { name: "Om" };

// Add
person.age = 25;

// Update
person.name = "Om Kumar";

// Delete
delete person.age;

console.log(person); // { name: "Om Kumar" }
