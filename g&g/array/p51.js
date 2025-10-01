// Find First and Last Position of Element in Sorted Array

// Given an array of integers nums sorted in non-decreasing order, find the starting and ending position of a given target value.

// If target is not found in the array, return [-1, -1].

// You must write an algorithm with O(log n) runtime complexity.

 

// Example 1:

// Input: nums = [5,7,7,8,8,10], target = 8
// Output: [3,4]
// Example 2:

// Input: nums = [5,7,7,8,8,10], target = 6
// Output: [-1,-1]
// Example 3:

// Input: nums = [], target = 0
// Output: [-1,-1]

let nums = [5,7,7,8,8,10], target = 8;
let res=[-1,-1];

for(let i=0; i<nums.length; i++){
    if(nums[i]===target){
        res[0]=i;
        break;
    }
}
for(let j=nums.length-1; j>=0; j--){
    if(nums[j]==target){
        res[1]=j;
        break;
    }
}
console.log(res)