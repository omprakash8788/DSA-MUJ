// // Type of Triangle
// You are given a 0-indexed integer array nums of size 3 which can form the sides of a triangle.

// A triangle is called equilateral if it has all sides of equal length.
// A triangle is called isosceles if it has exactly two sides of equal length.
// A triangle is called scalene if all its sides are of different lengths.
// Return a string representing the type of triangle that can be formed or "none" if it cannot form a triangle.

// Example 1:

// Input: nums = [3,3,3]
// Output: "equilateral"
// Explanation: Since all the sides are of equal length, therefore, it will form an equilateral triangle.
// Example 2:

// Input: nums = [3,4,5]
// Output: "scalene"
// Explanation: 
// nums[0] + nums[1] = 3 + 4 = 7, which is greater than nums[2] = 5.
// nums[0] + nums[2] = 3 + 5 = 8, which is greater than nums[1] = 4.
// nums[1] + nums[2] = 4 + 5 = 9, which is greater than nums[0] = 3. 
// Since the sum of the two sides is greater than the third side for all three cases, therefore, it can form a triangle.
// As all the sides are of different lengths, it will form a scalene triangle.


let nums=[3,3,3];
let [a,b,c]=nums
// console.log(a, b, c)
  // Check triangle inequality
  if (a + b <= c || a + c <= b || b + c <= a) {
    // return "none";
    console.log("none")
  }
 if(a===b && b===c){
    console.log("equilateral")
 } 
 else if (a===b || b===c || a===c){
    console.log("isosceles")
 }
 else{
    console.log("scalene")
 }

      // Check types
//   if (a === b && b === c) {
//     return "equilateral";
//   } else if (a === b || b === c || a === c) {
//     return "isosceles";
//   } else {
//     return "scalene";
//   }

/*
 Step 1: Triangle banane ka rule

3 sides (a, b, c) tabhi triangle bana sakti hai jab:
a + b > c
a + c > b
b + c > a

Agar ye condition fail ho jaye → "none"

Step 2: Triangle ke types check karo

Equilateral → sab sides equal (a == b == c)

Isosceles → sirf 2 sides equal (a == b || b == c || a == c)

Scalene → sab sides different


*/