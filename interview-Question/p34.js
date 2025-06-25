// Combine two objects

let a = { x: 1, y: 2 };
let b = { y: 3, z: 4 };

// Combine both into one, where b overrides a if duplicate keys exist.
let c={...a, ...b};
console.log(c)
