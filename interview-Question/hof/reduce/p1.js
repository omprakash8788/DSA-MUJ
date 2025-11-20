// 🚀 MASTERCLASS: JavaScript .reduce() — ALL SCENARIOS
// ✅ 1. Basic Syntax
// arr.reduce((accumulator, currentValue, index, array) => { ... }, initialValue)

// ✅ 2. Scenario: Sum of numbers

// → 10
let arr =[1,2,3,4]
let ans = arr.reduce((acc, cur) => acc + cur, 0)
console.log(ans)

// ------------------------------ Details -----------------

// We will start with the actual behavior:
arr.reduce(callback, initialValue)

// Internally, reduce does 5 major steps:
// ✅ STEP 1 — Validate the array

// If the array is null or undefined → throw error

// If array is empty AND no initial value → throw error

// Example:
// [].reduce((a, b) => a + b)
// ❌ TypeError: Reduce of empty array with no initial value

// Why?
// Because reduce needs some starting accumulator value.

// ✅ STEP 2 — Set the accumulator (acc)

// There are two cases:
// Case A: initialValue is provided
[1,2,3].reduce((acc, cur) => acc + cur, 100)

// acc = 100

// loop starts at index 0

// First call:
// acc = 100, cur = 1

// Case B: initialValue is NOT provided
[1,2,3].reduce((acc, cur) => acc + cur)
// acc = first element → 1

// loop starts at index 1

// First call:
// acc = 1, cur = 2

// 👉 This is VERY IMPORTANT for interviews.

// ✅ STEP 3 — Start the loop

// For each element
acc = callback(acc, currentValue, currentIndex, array)
// The callback receives 4 arguments:

// Argument	Meaning
// acc	 ------>>>>> accumulator
// cur	 ------>>>>> current element
// i	 ------>>>>> current index
// array ------>>>>	original array







