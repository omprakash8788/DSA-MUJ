/*
 Find Square Root
Problem Statement
Given a non-negative integer, write a function to compute the square root using binary search. If the square root is not an integer, return the floor value.

Sample Test Case
Input: x = 8  
Output: 2
Explanation: The square root of 8 is 2.82842..., and since we want the floor value, we return 2.
Approaches
Brute Force Approach
Idea
Try all numbers from 1 up to the square root of x by multiplying each number by itself and checking if the result is equal to or less than x.
Steps
Start from 1 and incrementally check if i * i <= x.
If the condition holds, update the result to i.
If the condition fails, return the last valid result.
Time Complexity
O(sqrt(n)), since we are iterating through all numbers up to the square root of x.
Space Complexity
O(1) constant space.


*/

function sqrt(x) {
  if (x < 2) return x;

  let result = 0;
  for (let i = 1; i * i <= x; i++) {
    result = i;
  }
  return result;
}

const x = 8;
console.log(sqrt(x)); // Output: 2
sqrt(8); // Output: 2
sqrt(16); // Output: 4
sqrt(25); // Output: 5
sqrt(2); // Output: 1

/*

 Efficient Approach (Binary Search)
Idea
Binary search between 1 and x to find the largest number whose square is less than or equal to x.
Steps
Initialize low = 1 and high = x.
Use binary search to find the square root:
Calculate mid = Math.floor((low + high) / 2).
If mid * mid == x, return mid.
If mid * mid < x, move the low pointer to mid + 1.
If mid * mid > x, move the high pointer to mid - 1.
Return the high pointer, which will be the floor value of the square root.
Time Complexity
O(log n) due to binary search.
Space Complexity
O(1) constant space.


function sqrt(x) {
    if (x < 2) return x;
    
    let low = 1, high = x;
    let result = 0;

    while (low <= high) {
        let mid = Math.floor((low + high) / 2);

        if (mid * mid === x) {
            return mid;
        } else if (mid * mid < x) {
            result = mid; // save the current mid as possible result
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }
    return result;
}

const x = 8;
console.log(sqrt(x));  // Output: 2

*/
