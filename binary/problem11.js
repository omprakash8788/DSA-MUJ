/*
 Find Minimum in Rotated Sorted Array
Problem Statement
Suppose an array of length n sorted in ascending order is rotated between 1 and n times. For example, the array nums = [0, 1, 2, 4, 5, 6, 7] might become:

[4, 5, 6, 7, 0, 1, 2] if it was rotated 4 times.
[0, 1, 2, 4, 5, 6, 7] if it was rotated 7 times.
Notice that rotating an array [a[0], a[1], a[2], ..., a[n-1]] 1 time results in the array [a[n-1], a[0], a[1], a[2], ..., a[n-2]].

Given the sorted rotated array nums of unique elements, return the minimum element of this array.

Example 1
Input: nums = [3, 4, 5, 1, 2]
Output: 1
Explanation: The original array was [1, 2, 3, 4, 5], rotated 3 times.
Example 2
Input: nums = [4, 5, 6, 7, 0, 1, 2]
Output: 0
Explanation: The original array was [0, 1, 2, 4, 5, 6, 7], rotated 4 times.
Example 3
Input: nums = [11, 13, 15, 17]
Output: 11
Explanation: The original array was [11, 13, 15, 17] and it was rotated 4 times.
Approaches
Brute Force
Idea
We can linearly traverse the array to find the smallest element. Since the array is rotated, the smallest element will be the point where the sorted order breaks.

Steps
Traverse the array and compare each element with the previous one.
The point where the element is smaller than its predecessor is the minimum element.
Time Complexity
O(n) because we are linearly traversing the array.
Space Complexity
O(1) as we are not using any extra space.
 
*/

function findMin(nums) {
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] < nums[i - 1]) {
            return nums[i];
        }
    }
    return nums[0];  // If no rotation, the first element is the minimum
}

const nums = [4, 5, 6, 7, 0, 1, 2];
console.log(findMin(nums));  // Output: 0


/*
  Efficient Approach (Binary Search)
Idea
We can optimize the solution using binary search since the array is sorted and rotated. The minimum element will be where the rotation happens.

Steps
Initialize low = 0 and high = nums.length - 1.
Perform binary search:
If the middle element is smaller than its previous one, it is the minimum.
If the middle element is greater than the first element, move to the right half.
Otherwise, move to the left half.
Return the minimum element.
Time Complexity
O(log(n)) because binary search is used.
Space Complexity
O(1) as we are using constant extra space.

function findMin(nums) {
    let l = 0, h = nums.length - 1;
    while (l < h) {
        let mid = Math.floor((l + h) / 2);
        if (nums[mid] < nums[h]) {
            h = mid;
        } else {
            l = mid + 1;
        }
    }
    return nums[l];
}

const nums = [4, 5, 6, 7, 0, 1, 2];
console.log(findMin(nums));  // Output: 0


*/