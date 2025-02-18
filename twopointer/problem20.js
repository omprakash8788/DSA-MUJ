/*
 Smallest Subarray with Sum ≥ Target (Sliding Window / Two Pointers)
Problem Statement:
Given an array of positive integers nums and an integer target, find the length of the smallest contiguous subarray whose sum is greater than or equal to target. If no such subarray exists, return 0.

Input: target = 7, nums = [2,3,1,2,4,3]  
Output: 2  
Explanation: The smallest subarray with sum ≥ 7 is `[4,3]` (length `2`).


*/

function minSubArrayLen(target, nums) {
    let left = 0, sum = 0, minLength = Infinity;

    for (let right = 0; right < nums.length; right++) {
        sum += nums[right]; // Expand window

        while (sum >= target) { // Try to shrink window
            minLength = Math.min(minLength, right - left + 1);
            sum -= nums[left]; // Remove leftmost element
            left++;
        }
    }

    return minLength === Infinity ? 0 : minLength;
}

// Test cases
console.log(minSubArrayLen(7, [2,3,1,2,4,3])); // Output: 2
console.log(minSubArrayLen(11, [1,1,1,1,1,1,1,1])); // Output: 0
console.log(minSubArrayLen(15, [5,1,3,5,10,7,4,9,2,8])); // Output: 2
console.log(minSubArrayLen(4, [1,4,4])); // Output: 1
console.log(minSubArrayLen(6, [2,3,1,1,1,1,1,1,1])); // Output: 3
