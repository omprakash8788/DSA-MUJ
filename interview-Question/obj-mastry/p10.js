// Deep equality

const isEqual = (a,b) => JSON.stringify(a) === JSON.stringify(b);
console.log(isEqual({x:1},{x:1})); // true

