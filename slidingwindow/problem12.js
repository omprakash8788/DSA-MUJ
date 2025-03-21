/*
  Longest Harmonious Subsequence
Problem Statement
We define a harmonious array as an array where the difference between its maximum value and its minimum value is exactly 1. Given an integer array nums, return the length of its longest harmonious subsequence among all its possible subsequences.

Example Inputs
Example 1:

Input: nums = [1, 3, 2, 2, 5, 2, 3, 7]
Output: 5
Explanation: The longest harmonious subsequence is [3, 2, 2, 2, 3].
Example 2:

Input: nums = [1, 2, 3, 4]
Output: 2
Explanation: The longest harmonious subsequences are [1, 2], [2, 3], and [3, 4], all of which have a length of 2.
Example 3:

Input: nums = [1, 1, 1, 1]
Output: 0
Explanation: No harmonic subsequence exists.
Constraints
1 <= nums.length <= 2 * 10^4
-10^9 <= nums[i] <= 10^9
Brute Force Approach
a. Approach
The brute force approach involves generating all possible subsequences of the array nums and checking each subsequence to see if it is harmonious (i.e., the maximum and minimum values differ by exactly 1). This can be inefficient due to the potentially large number of subsequences.

b. Steps
Generate all possible subsequences of nums.
For each subsequence, find the maximum and minimum values.
Check if the difference between the maximum and minimum values is 1.
Keep track of the length of the longest harmonious subsequence found.
Return the length of the longest harmonious subsequence.
c. Time & Space Complexity
Time Complexity: O(2^n * n) (due to generating subsequences and checking each one)
Space Complexity: O(n) (for storing the subsequences)
*/


/*
 Efficient Approach (Sliding Window)
a. Approach
Using a sliding window, we can look for harmonious subsequences by moving a window across the sorted array. This ensures that any harmonious subsequence found has adjacent elements differing by at most 1.

b. Steps
Sort the array nums.
Use two pointers (start and end) to create a window.
Expand the window by moving the end pointer until the difference between nums[end] and nums[start] is greater than 1.
When the difference becomes greater than 1, move the start pointer to maintain a harmonious window.
Track the maximum length of harmonious subsequences found in each window.
c. Time & Space Complexity
Time Complexity: O(n log n) (sorting)
Space Complexity: O(1)

*/

function findLHS(nums) {
    nums.sort((a, b) => a - b);
    let start = 0;
    let maxLength = 0;

    for (let end = 1; end < nums.length; end++) {
        while (nums[end] - nums[start] > 1) {
            start++;
        }
        if (nums[end] - nums[start] === 1) {
            maxLength = Math.max(maxLength, end - start + 1);
        }
    }

    return maxLength;
}

const nums = [1, 3, 2, 2, 5, 2, 3, 7];
console.log(findLHS(nums));  // Output: 5
