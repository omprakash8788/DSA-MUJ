/*
 Two Sum

Given an array A and an integer target, find the indices of the two numbers in the array whose sum is equal to the given target.

Note: The problem has exactly one solution. Do not use the same element twice.

A: [1, 3, 3, 4]
target: 5
Answer: [0, 3]


*/

function twoSum(A, target) {
    for (let i = 0; i < A.length; i++) {
        for (let j = i + 1; j < A.length; j++) {
            if (A[i] + A[j] === target) {
                return [i, j];
            }
        }
    }
    return []; // Return an empty array if no solution is found
}

// Example usage:
console.log(twoSum([1, 3, 3, 4], 5)); // Output: [0, 3]