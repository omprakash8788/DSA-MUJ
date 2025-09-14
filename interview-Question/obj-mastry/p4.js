// Transformations

const obj = { a: 1, b: 2 };

// Obj → Array
console.log(Object.entries(obj)); // [ ['a',1], ['b',2] ]

// Array → Obj
const arr = [["x", 10], ["y", 20]];
console.log(Object.fromEntries(arr)); // { x: 10, y: 20 }


// ⚡ Hack: Map object values
const newObj = Object.fromEntries(
  Object.entries(obj).map(([k,v]) => [k, v * 2])
);
console.log(newObj); // { a:2, b:4 }
