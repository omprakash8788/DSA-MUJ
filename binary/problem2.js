/*
  Find Target Element
Problem Statement
Given a sorted array nums and a target value, return the index if the target is found. If the target is not found, return -1.

Example
Input: nums = [1, 2, 3, 4, 5], target = 3
Output: 2

Approaches
Brute Force Approach
Idea
We can iterate through the array and check each element one by one. If the target is found, return the index; otherwise, return -1.

Steps
Iterate through each element of the array.
If an element matches the target, return its index.
If no element matches, return -1.
Time Complexity
O(n): We iterate through the entire array.
Space Complexity
O(1): No extra space is used.
*/

function linearSearch(nums, target) {
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === target) {
            return i;
        }
    }
    return -1;
}

const nums = [1, 2, 3, 4, 5];
const target = 3;
console.log(linearSearch(nums, target));  // Output: 2


//Efficient Approach: Binary Search
// function binarySearch(nums, target) {
//     let left = 0;
//     let right = nums.length - 1;

//     while (left <= right) {
//         let mid = Math.floor((left + right) / 2);
        
//         if (nums[mid] === target) {
//             return mid;
//         } else if (nums[mid] < target) {
//             left = mid + 1;
//         } else {
//             right = mid - 1;
//         }
//     }
    
//     return -1;
// }

// const nums = [1, 2, 3, 4, 5];
// const target = 3;
// console.log(binarySearch(nums, target));  // Output: 2