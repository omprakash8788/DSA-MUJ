// Maximum Gap

// Given an integer array nums, return the maximum difference between two successive elements in its sorted form. If the array contains less than two elements, return 0.

// You must write an algorithm that runs in linear time and uses linear extra space.

// Example 1:

// Input: nums = [3,6,9,1]
// Output: 3
// Explanation: The sorted form of the array is [1,3,6,9], either (3,6) or (6,9) has the maximum difference 3.
// Example 2:

// Input: nums = [10]
// Output: 0
// Explanation: The array contains less than 2 elements, therefore return 0.

// let nums = [10];

// if (nums.length < 2) {
//   console.log(0);
// }
// let diff = 0;
// for (let i = 0; i < nums.length-1; i++) {
//   diff = Math.max(diff, nums[i + 1] - nums[i]);
// }
// console.log(diff);

let nums = [3,6,9,1]
var maximumGap = function(nums) {
    nums.sort((a,b)=>(a-b));
    if(nums.length < 2){
        return 0;
    }
    // let c=nums[0]
    // let m=nums[0]
    let diff= 0
    for (let i = 0; i < nums.length - 1; i++) {
        diff = Math.max(diff, nums[i + 1] - nums[i]);
    }
    return diff;
};
console.log(maximumGap(nums))
