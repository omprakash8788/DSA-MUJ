const add = (a = 1, b = 2) => a + b;
// a=1==> overtiht with 5 then 5+ 2 = 7
console.log(add()); // 3
console.log(add(5)); // 
console.log(add(undefined, 10));


// Key Concept: Default Parameters in JavaScript

// const add = (a = 1, b = 2) => a + b;
// This means:

// If a is not provided (or is undefined), use 1.

// If b is not provided (or is undefined), use 2.

// 🔍 Line-by-line Breakdown:
// 1️⃣ console.log(add());
// No arguments passed → uses both defaults: a = 1, b = 2

// → 1 + 2 = 3
// ✅ Output: 3

// 2️⃣ console.log(add(5));
// a = 5, b is not passed → use default b = 2

// → 5 + 2 = 7
// ✅ Output: 7

// 3️⃣ console.log(add(undefined, 10));
// a = undefined → default applies → a = 1

// b = 10

// → 1 + 10 = 11
// ✅ Output: 11

// 🔥 Summary:
// Call	a	b	Result
// add()	1 (default)	2 (default)	3
// add(5)	5	2 (default)	7
// add(undefined, 10)	1 (default)	10	11