// 1005. Maximize Sum Of Array After K Negations

// Given an integer array nums and an integer k, modify the array in the following way:

// choose an index i and replace nums[i] with -nums[i].
// You should apply this process exactly k times. You may choose the same index i multiple times.

// Return the largest possible sum of the array after modifying it in this way.

 

// Example 1:

// Input: nums = [4,2,3], k = 1
// Output: 5
// Explanation: Choose index 1 and nums becomes [4,-2,3].
// Example 2:

// Input: nums = [3,-1,0,2], k = 3
// Output: 6
// Explanation: Choose indices (1, 2, 2) and nums becomes [3,1,0,2].
// Example 3:

// Input: nums = [2,-3,-1,5,-4], k = 2
// Output: 13
// Explanation: Choose indices (1, 4) and nums becomes [2,3,-1,5,4].

let nums = [4,2,3], k = 1
var largestSumAfterKNegations = function(nums, k) {
  
    nums.sort((a, b) => a - b);
    
    //Flip negatives first
    for (let i = 0; i < nums.length && k > 0; i++) {
        if (nums[i] < 0) {
            nums[i] = -nums[i];
            k--;
        }
    }

    //If k is still odd, flip the smallest absolute value
    let minNum = Math.min(...nums);
    if (k % 2 === 1) {
        nums[nums.indexOf(minNum)] = -minNum;
    }

    //Return sum
    return nums.reduce((sum, val) => sum + val, 0);
};
console.log(largestSumAfterKNegations(nums, k))