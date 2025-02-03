/*
Given an integer array nums, find the 
subarray
 with the largest sum, and return its sum.
 
Example 1:
Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
Output: 6
Explanation: The subarray [4,-1,2,1] has the largest sum 6.

*/

let nums = [-2,1,-3,4,-1,2,1,-5,4];

let maxSum = nums[0];
let currentSum = nums[0];
for (let i = 1; i < nums.length; i++) {
    currentSum = Math.max(nums[i], currentSum + nums[i]);
    maxSum = Math.max(maxSum, currentSum);
}
// return maxSum;
console.log(maxSum);
