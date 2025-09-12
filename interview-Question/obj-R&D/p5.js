// Cloning

let obj1 = { a: 1, b: { c: 2 } };

// Shallow copy
let shallow = { ...obj1 };
console.log("shallow", shallow)

// Deep copy
let deep = JSON.parse(JSON.stringify(obj1));
console.log("deep", deep)


// Modern way
let deep2 = structuredClone(obj1);
console.log("deep2", deep2)

