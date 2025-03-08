/*
First Occurrence
First Occurrence of Target in Sorted Array
Problem Statement
Given a sorted array nums with duplicates and a target value, return the index of the first occurrence of the target. If the target is not found, return -1.

Example Test Cases
Input: nums = [1, 2, 3, 4, 4, 5], target = 4
Output: 3
Input: nums = [1, 1, 2, 3, 5, 6], target = 4
Output: -1



Approaches
Brute Force Approach
Idea: Traverse the array and return the index of the first occurrence of the target.

Steps:

Iterate through each element in the array.
If the current element is equal to the target, return its index.
If no element matches, return -1.
Time Complexity: O(n) where n is the length of the array.

Space Complexity: O(1) as it uses constant extra space.

Example Code:


*/
// Brute Force Approach
function firstOccurrence(nums, target) {
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === target) {
                return i;
            }
        }
        return -1;
    }

const nums = [1, 2, 3, 4, 4, 5];
const target = 4;
console.log(firstOccurrence(nums, target));  // Output: 3


// Opti Approach
// function firstOccurrence(nums, target) {
//     let low = 0, high = nums.length - 1;
//     while (low <= high) {
//             let mid = Math.floor((low + high) / 2);
//             if (nums[mid] === target) {
//                 if (mid === 0 || nums[mid - 1] < target) {
//                     return mid;
//                 }
//                 high = mid - 1;
//             } else if (nums[mid] > target) {
//                 high = mid - 1;
//             } else {
//                 low = mid + 1;
//             }
//         }
//         return -1;
//     }
//     const nums = [1, 2, 3, 4, 4, 5];
//     const target = 4;
//     console.log(firstOccurrence(nums, target));  // Output: 3
