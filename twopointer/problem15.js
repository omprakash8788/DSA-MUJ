/*
Find the Longest Subarray with Sum ≤ K Using Two Pointers
Problem Statement:
Given an array of positive integers and an integer K, find the length of the longest subarray whose sum is less than or equal to K.
Solve this using the two-pointer (sliding window) technique in O(n) time complexity.
Input: arr = [1, 2, 3, 4, 5], K = 9  
Output: 3  
Explanation: The longest subarray is [2, 3, 4] (sum = 9).


*/

function longestSubarray(arr, K) {
    let left = 0, sum = 0, maxLength = 0;

    for (let right = 0; right < arr.length; right++) {
        sum += arr[right]; // Expand window

        while (sum > K) {
            sum -= arr[left]; // Shrink window
            left++;
        }

        maxLength = Math.max(maxLength, right - left + 1);
    }

    return maxLength;
}

// Test cases
console.log(longestSubarray([3, 1, 2, 1, 4, 5], 5)); // Output: 3
console.log(longestSubarray([1, 2, 3, 4, 5], 9)); // Output: 3
console.log(longestSubarray([1, 1, 1, 1, 1, 1], 4)); // Output: 4
console.log(longestSubarray([5, 6, 7, 8], 4)); // Output: 0 (No valid subarray)
console.log(longestSubarray([10, 2, 3, 1, 4, 6], 7)); // Output: 3
console.log(longestSubarray([], 5)); // Output: 0 (Empty array)
console.log(longestSubarray([3, 3, 3, 3], 6)); // Output: 2
