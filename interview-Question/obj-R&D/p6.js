// Freezing & Sealing

const user = { name: "Om", age: 24 };

Object.freeze(user);
user.age = 30; // ❌ ignored
console.log(user.age); // 24

const obj = { x: 1 };
Object.seal(obj);
delete obj.x; // ❌ not allowed
obj.x = 99;   // ✅ allowed
console.log(obj); // { x: 99 }
