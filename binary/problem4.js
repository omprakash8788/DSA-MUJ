/*

  Last Occurrence
Last Occurrence of Target in Sorted Array
Problem Statement
Given a sorted array nums with duplicates and a target value, return the index of the last occurrence of the target. If the target is not found, return -1.

Example Test Cases
Input: nums = [1, 2, 3, 4, 4, 5], target = 4
Output: 4
Input: nums = [1, 1, 2, 3, 5, 6], target = 4
Output: -1
Approaches
Brute Force Approach
Idea: Traverse the array and track the index of the last occurrence of the target.

Steps:

Iterate through each element in the array.
If the current element is equal to the target, update the index.
Return the last updated index or -1 if the target is not found.
Time Complexity: O(n) where n is the length of the array.

Space Complexity: O(1) as it uses constant extra space.


*/

function lastOccurrence(nums, target) {
    let index = -1;
    for (let i = 0; i < nums.length; i++) {
            if (nums[i] === target) {
                index = i;
            }
        }
        return index;
    }

    const nums = [1, 2, 3, 4, 4, 5];
    const target = 4;
    console.log(lastOccurrence(nums, target));  // Output: 4


    /*
     Efficient Approach (Binary Search)
Idea: Use binary search to find the last occurrence of the target in the sorted array.

Steps:

Initialize low to 0 and high to n - 1.
Perform binary search:
If nums[mid] equals the target and is the last occurrence (either mid == n - 1 or nums[mid + 1] > target), return mid.
If nums[mid] is less than or equal to the target, move low to mid + 1.
Otherwise, move high to mid - 1.
If the target is not found, return -1.
Time Complexity: O(log n) where n is the length of the array.

Space Complexity: O(1) as it uses constant extra space.


*/

// function lastOccurrence(nums, target) {
//     let low = 0, high = nums.length - 1;
//     while (low <= high) {
//         let mid = Math.floor((low + high) / 2);
//             if (nums[mid] === target) {
//                 if (mid === nums.length - 1 || nums[mid + 1] > target) {
//                     return mid;
//                 }
//                 low = mid + 1;
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
//     console.log(lastOccurrence(nums, target));  // Output: 4
