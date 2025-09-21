// Find N Unique Integers Sum up to Zero

// Given an integer n, return any array containing n unique integers such that they add up to 0.

// We need to create an array of n unique integers such that the sum = 0.

// Unique → No repeated integers.

// Sum = 0 → The positive and negative numbers should balance each other.

// Numbers naturally cancel each other:
// If you take k and -k, their sum is 0.
// Example: 2 + (-2) = 0.

// Example 1:

// Input: n = 5
// Output: [-7,-1,1,3,4]
// Explanation: These arrays also are accepted [-5,-1,1,2,3] , [-3,-1,2,-2,4].
// Example 2:

// Input: n = 3
// Output: [-1,0,1]
// Example 3:

// Input: n = 1
// Output: [0]

let n = 5;
let temp = [];

for (let i = 1; i <= Math.floor(n / 2); i++) {
  temp.push(-i);
  temp.push(i);
}

if (n % 2 !== 0) {
  temp.push(0);
}
console.log(temp);
