/*

 Search in Rotated Sorted Array
Problem Statement
Given an integer array nums sorted in ascending order, possibly rotated at an unknown pivot, and a target, return the index of the target if it exists, or -1 if it doesn't.

You must solve it with O(log n) runtime complexity.

Sample Test Cases
Example 1
Input: nums = [4, 5, 6, 7, 0, 1, 2], target = 0
Output: 4

Input: nums = [4, 5, 6, 7, 0, 1, 2], target = 3
Output: -1

Input: nums = [1], target = 0
Output: -1

Approaches
Brute Force
Idea
Iterate through the array linearly and compare each element with the target.

Steps
Traverse the array from the first to the last element.
Compare each element with the target.
If found, return the index; otherwise, return -1.
Time Complexity
O(n) where n is the length of the array.
Space Complexity
O(1) since no additional space is required.


*/

function searchBruteForce(nums, target) {
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === target) {
            return i;
        }
    }
    return -1;
}

const nums = [4, 5, 6, 7, 0, 1, 2];
const target = 0;
console.log(searchBruteForce(nums, target));  // Output: 4

/*
 Efficient Approach (Binary Search)
Idea
Since the array is rotated, but both left and right halves are sorted, use binary search to find the target by checking which half is sorted and adjusting the search space accordingly.

Steps
Initialize two pointers low and high.
Find the middle element mid.
If mid is the target, return mid.
If the left half is sorted:
Check if the target lies within this half and adjust the search range.
If the right half is sorted:
Check if the target lies within this half and adjust the search range.
Repeat until the target is found or low exceeds high.
Time Complexity
O(log n) due to binary search.
Space Complexity
O(1) as no additional space is required.

function search(nums, target) {
    let low = 0, high = nums.length - 1;

    while (low <= high) {
        let mid = Math.floor((low + high) / 2);

        if (nums[mid] === target) {
            return mid;
        }

        // Check if the left half is sorted
        if (nums[low] <= nums[mid]) {
            if (nums[low] <= target && target < nums[mid]) {
                high = mid - 1;
            } else {
                low = mid + 1;
            }
        } 
        // Else, the right half must be sorted
        else {
            if (nums[mid] < target && target <= nums[high]) {
                low = mid + 1;
            } else {
                high = mid - 1;
            }
        }
    }

    return -1;
}

const nums = [4, 5, 6, 7, 0, 1, 2];
const target = 0;
console.log(search(nums, target));  // Output: 4
*/