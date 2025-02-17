/*
  Find the Maximum Consecutive Ones (Two Pointer Approach)
Problem Statement:
Given a binary array nums (only 0s and 1s), find the maximum number of consecutive 1s in the array.

You must solve this using the two-pointer approach.

Input: nums = [1, 1, 0, 1, 1, 1]  
Output: 3  
Explanation: The longest sequence of consecutive 1s is `[1, 1, 1]`, which has length `3`.

*/

function findMaxConsecutiveOnes(nums) {
    let maxOnes = 0, left = 0;

    for (let right = 0; right < nums.length; right++) {
        if (nums[right] === 0) {
            left = right + 1; // Reset the window if we encounter a 0
        } else {
            maxOnes = Math.max(maxOnes, right - left + 1);
        }
    }

    return maxOnes;
}

// Test cases
console.log(findMaxConsecutiveOnes([1, 1, 0, 1, 1, 1])); // Output: 3
console.log(findMaxConsecutiveOnes([1, 0, 1, 1, 0, 1])); // Output: 2
console.log(findMaxConsecutiveOnes([0, 0, 0])); // Output: 0
console.log(findMaxConsecutiveOnes([1, 1, 1, 1, 1])); // Output: 5
console.log(findMaxConsecutiveOnes([1, 1, 0, 1])); // Output: 2
