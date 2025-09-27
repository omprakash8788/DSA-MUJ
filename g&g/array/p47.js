// Longest Harmonious Subsequence

// We define a harmonious array as an array where the difference between its maximum value and its minimum value is exactly 1.

// Given an integer array nums, return the length of its longest harmonious subsequence among all its possible subsequences.

 

// Example 1:

// Input: nums = [1,3,2,2,5,2,3,7]

// Output: 5

// Explanation:

// The longest harmonious subsequence is [3,2,2,2,3].

// Example 2:

// Input: nums = [1,2,3,4]

// Output: 2

// Explanation:

// The longest harmonious subsequences are [1,2], [2,3], and [3,4], all of which have a length of 2.

// Example 3:

// Input: nums = [1,1,1,1]

// Output: 0

// Explanation:

// No harmonic subsequence exists.

let nums = [1,3,2,2,5,2,3,7]
var findLHS = function(nums) {
  let obj = {};
    let maxLen = 0;

    // build frequency map
    for (let i = 0; i < nums.length; i++) {
        if (obj[nums[i]] === undefined) {
            obj[nums[i]] = 1;
        } else {
            obj[nums[i]]++;
        }
    }

    // check pairs num and num+1
    for (let [numStr, count] of Object.entries(obj)) {
        let num = Number(numStr); // keys are strings
        if (obj[num + 1] !== undefined) {
            maxLen = Math.max(maxLen, count + obj[num + 1]);
        }
    }

    return maxLen;

};

console.log(findLHS(nums))
