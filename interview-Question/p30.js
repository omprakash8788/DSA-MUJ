// Update the name and age without modifying the original
let user = { name: "Alice", age: 22 };
// Create a new object where name = "Bob" and age = 30.
let newUser={...user, name:"Bom", age:"30"};
console.log("Original ", user)
console.log("New Obj",newUser)