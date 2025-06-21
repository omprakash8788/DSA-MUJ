let x = [1, 2, 3];
let y = [1, 2, 3];
let z = y;  // [1,2,3] 

console.log(x == y); // f
console.log(x === y); // f
console.log(z == y); // z==y
console.log(z == x);  //f



// 🧪 Comparisons
// x == y → false
// Different references (MemoryRef1 ≠ MemoryRef2)

// x === y → false
// Strict equality, still different references.

// z == y → true
// Same reference (MemoryRef2 == MemoryRef2)

// z == x → false
// z → MemoryRef2, x → MemoryRef1 → ❌ not same


// ✅ Summary Table
// Comparison	Result	Why
// x == y	false	Different references
// x === y	false	Different references
// z == y	true	Same reference (z = y)
// z == x	false	Different references