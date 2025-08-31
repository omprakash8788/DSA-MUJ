// Common in 3 Sorted Arrays

// Given three sorted arrays in non-decreasing order, print all common elements in non-decreasing order across these arrays. If there are no such elements return an empty array. In this case, the output will be -1.

// Note: can you handle the duplicates without using any additional Data Structure?

// Input: arr1 = [1, 5, 10, 20, 40, 80] , arr2 = [6, 7, 20, 80, 100] , arr3 = [3, 4, 15, 20, 30, 70, 80, 120]
// Output: [20, 80]
// Explanation: 20 and 80 are the only common elements in arr, brr and crr.

// Input: arr1 = [1, 2, 3, 4, 5] , arr2 = [6, 7] , arr3 = [8,9,10]
// Output: [-1]
// Explanation: There are no common elements in arr, brr and crr.


// Input: arr1 = [1, 1, 1, 2, 2, 2], B = [1, 1, 2, 2, 2], arr3 = [1, 1, 1, 1, 2, 2, 2, 2]
// Output: [1, 2]
// Explanation: We do not need to consider duplicates


let arr1 = [1, 5, 10, 20, 40, 80],
  arr2 = [6, 7, 20, 80, 100],
  arr3 = [3, 4, 15, 20, 30, 70, 80, 120];
let set1 = new Set(arr1);
let set2 = new Set(arr2);
let set3 = new Set(arr3);
// console.log(set1, set2,set3)

let result = [];

for (let num of set1) {
  if (set2.has(num) && set3.has(num)) {
    result.push(num);
  }
}
console.log(result);
//  return result;


// Detail explain part
/*
1) Har array ko Set banaya

Ye duplicates hata deta hai aur fast lookup deta hai.

set1 = {1, 5, 10, 20, 40, 80}
set2 = {6, 7, 20, 80, 100}
set3 = {3, 4, 15, 20, 30, 70, 80, 120}


2) set1 ke elements ko ek-ek karke iterate kiya
1 → set2.has(1)? ❌  set3.has(1)? ❌   → skip
5 → ❌ ❌ → skip
10 → ❌ ❌ → skip
20 → ✔️ set2.has(20)  ✔️ set3.has(20) → push(20)
40 → ❌ ❌ → skip
80 → ✔️ set2.has(80)  ✔️ set3.has(80) → push(80)

3) result me kya gaya?
result = [20, 80]
Kyuki yehi do elements tino sets me milte hain.


20 aur 80 tino me common the.

"has" JavaScript me "Set" aur "Map" dono ka ek built-in method hai. Hamare case me humne Set ke saath use kiya hai.


"has" ka kaam kya hai?
Kaam: Check karta hai ki koi element Set ke andar exist karta hai ya nahi.

Syntax:
mySet.has(value)
value: jis element ko check karna hai.

Return karega: true (agar element set me hai) ya false (agar nahi hai).

Example
let numbers = new Set([10, 20, 30]);

console.log(numbers.has(20)); // true (20 set me maujood hai)
console.log(numbers.has(40)); // false (40 set me nahi hai)


Hamare code me
if (set2.has(num) && set3.has(num)) {
    result.push(num);
}


set2.has(num): check karta hai ki kya num arr2 ke Set me hai?

set3.has(num): check karta hai ki kya num arr3 ke Set me hai?

Dono agar true hue → num teeno arrays me common hai → result.push(num).

Kyun .has() use kiya?
Kyunki Set.has() ka lookup O(1) hota hai (bahut fast).


*/