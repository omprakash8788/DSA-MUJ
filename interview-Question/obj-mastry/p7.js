// Merging

const a = { x: 1, y: 2 };
const b = { y: 99, z: 3 };

// Spread
const merged = { ...a, ...b }; 
console.log(merged); // { x:1, y:99, z:3 }

// Assign
const merged2 = Object.assign({}, a, b);


// ⚡ Hack: Nested merge with deep copy (reduce trick)
const objs = [{a:1}, {b:2}, {c:3}];
const mergedAll = objs.reduce((acc, cur) => ({...acc, ...cur}), {});
console.log(mergedAll); // {a:1, b:2, c:3}



