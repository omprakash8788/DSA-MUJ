/*
 Two Sum

Given an array A and an integer target, find the indices of the two numbers in the array whose sum is equal to the given target.

Note: The problem has exactly one solution. Do not use the same element twice.

A: [1, 3, 3, 4]
target: 5
Answer: [0, 3]


*/


function twoSum(A, target) {
    let hashTable = {}; // Object to store numbers and their indices

    for (let i = 0; i < A.length; i++) {
        let complement = target - A[i]; // Find the required pair number

        // Check if the complement exists in our hash table
        if (hashTable[complement] !== undefined) {
            return [hashTable[complement], i]; // Return indices of both numbers
        }

        // Store the current number's index in the hash table
        hashTable[A[i]] = i;
    }

    return []; // If no solution found (though problem guarantees one solution)
}

// Example usage:
console.log(twoSum([1, 3, 3, 4], 5)); // Output: [0, 3]
