/*
 Minimum Difference Between Highest and Lowest of K Scores
Problem Statement
You are given a 0-indexed integer array nums, where nums[i] represents the score of the ith student. You are also given an integer k.

Pick the scores of any k students from the array so that the difference between the highest and the lowest of the k scores is minimized.

Return the minimum possible difference.

Constraints
1 <= k <= nums.length <= 1000
0 <= nums[i] <= 10^5
Example Inputs and Outputs
Example 1:

Input: nums = [90], k = 1
Output: 0
Explanation: There is one way to pick score(s) of one student: [90]. The difference between the highest and lowest score is 90 - 90 = 0. The minimum possible difference is 0.
Example 2:

Input: nums = [9,4,1,7], k = 2
Output: 2
Explanation: There are several ways to pick scores of two students, including:
[9, 7] (difference is 2)
[4, 1] (difference is 3) The minimum possible difference is 2.



Brute Force Approach
a. Approach
The brute-force approach involves examining all possible sets of k scores and calculating the difference between the highest and lowest scores in each set, selecting the minimum difference found.

b. Steps
Generate all possible combinations of k scores from nums.
For each combination, find the maximum and minimum scores.
Calculate the difference between the maximum and minimum scores.
Track the smallest difference.
c. Time & Space Complexity
Time Complexity: O(n^k), due to generating all subsets of size k.
Space Complexity: O(k), for storing each subset temporarily.



*/

// function minimumDifference(nums, k) {
//     if (k === 1) return 0;

//     let minDiff = Infinity;

//     for (let i = 0; i <= nums.length - k; i++) {
//         for (let j = i; j < i + k; j++) {
//             const subset = nums.slice(i, i + k);
//             const diff = Math.max(...subset) - Math.min(...subset);
//             minDiff = Math.min(minDiff, diff);
//         }
//     }
//     return minDiff;
// }
// const nums = [9,4,1,7];
// const k = 2;
// console.log(minimumDifference(nums, k));  // Output: 2


/*
 Efficient Approach (Sliding Window)
a. Approach
The efficient approach leverages sorting and the sliding window technique. By sorting nums, the minimum difference between the largest and smallest elements in a k-length window will yield the desired minimum.

b. Steps
Sort the array nums.
For each consecutive k-length subset of nums, calculate the difference between the last and first elements in the window.
Track and return the minimum difference.
c. Time & Space Complexity
Time Complexity: O(n log n) for sorting, and O(n) for finding the minimum difference in a sliding window.
Space Complexity: O(1), if sorting is done in-place.

*/

function minimumDifference(nums, k) {
    if (k === 1) return 0;

    nums.sort((a, b) => a - b);
    let minDiff = Infinity;

    for (let i = 0; i <= nums.length - k; i++) {
        const diff = nums[i + k - 1] - nums[i];
        minDiff = Math.min(minDiff, diff);
    }

    return minDiff;
}
const nums = [9,4,1,7];
const k = 2;
console.log(minimumDifference(nums, k));  // Output: 2