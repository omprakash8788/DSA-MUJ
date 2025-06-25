// Remove a property (age) from an object
let person = { name: "Rita", age: 27, gender: "Female" };

//  Create a new object without the age key.
let {age, ...newperson}=person
console.log(newperson)