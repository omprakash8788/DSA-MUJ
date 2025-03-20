/*
Contains Duplicate
Problem Statement
Given an integer array nums and an integer k, return true if there are two distinct indices i and j in the array such that nums[i] == nums[j] and abs(i - j) <= k.

Example Inputs

Example 1:

Input: nums = [1,2,3,1], k = 3
Output: true

Example 2:

Input: nums = [1,0,1,1], k = 1
Output: true


Brute Force Approach
a. Approach
The brute force approach involves comparing each element with every other element within the given distance k. We iterate over each index and for each index, check all other indices up to k steps away.

b. Steps
Iterate through the array with a nested loop.
For each element at index i, check the elements at indices from i+1 to i+k.
If any of these elements is equal to nums[i], return true.
If no such elements are found, return false.
c. Time & Space Complexity
Time Complexity: O(n * k)
Space Complexity: O(1)


function containsNearbyDuplicate(nums, k) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j <= i + k && j < nums.length; j++) {
            if (nums[i] === nums[j]) {
                return true;
            }
        }
    }
    return false;
}
const nums = [1, 2, 3, 1];
const k = 3;
console.log(containsNearbyDuplicate(nums, k));  // Output: true

*/

/*
  Efficient Approach (Sliding Window)
a. Approach
Using a sliding window with a set, we can maintain only the last k elements in a window to check for duplicates efficiently. As we slide the window, we add the new element and remove the element that is now out of range.

b. Steps
Initialize an empty set to store elements within the current window.
Traverse the array:
Check if the current element already exists in the set. If it does, return true.
Add the current element to the set.
If the set size exceeds k, remove the element at i-k to maintain the window size.
If no duplicates are found within range k, return false.
*/

function containsNearbyDuplicate(nums, k) {
    const windowSet = new Set();

    for (let i = 0; i < nums.length; i++) {
        if (windowSet.has(nums[i])) {
            return true;
        }
        windowSet.add(nums[i]);
        if (windowSet.size > k) {
            windowSet.delete(nums[i - k]);
        }
    }

    return false;
}

const nums = [1, 2, 3, 1];
const k = 3;
console.log(containsNearbyDuplicate(nums, k));  // Output: true
