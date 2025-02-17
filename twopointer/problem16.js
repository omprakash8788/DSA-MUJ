/*
  Minimum Size Subarray Sum (Two Pointers / Sliding Window)
Problem Statement:
Given an array of positive integers and a target sum K, find the smallest subarray length whose sum is greater than or equal to K.
If no such subarray exists, return 0.
Solve this using the two-pointer (sliding window) technique in O(n) time complexity.
 Input: arr = [2, 3, 1, 2, 4, 3], K = 7  
Output: 2  
Explanation: The subarray [4, 3] has sum = 7 and is the shortest valid subarray.

*/

function minSubArrayLen(K, arr) {
    let left = 0, sum = 0, minLength = Infinity;

    for (let right = 0; right < arr.length; right++) {
        sum += arr[right]; // Expand window

        while (sum >= K) {
            minLength = Math.min(minLength, right - left + 1);
            sum -= arr[left]; // Shrink window
            left++;
        }
    }

    return minLength === Infinity ? 0 : minLength;
}

// Test cases
console.log(minSubArrayLen(7, [2, 3, 1, 2, 4, 3])); // Output: 2
console.log(minSubArrayLen(4, [1, 4, 4])); // Output: 1
console.log(minSubArrayLen(11, [1, 1, 1, 1, 1, 1, 1])); // Output: 0
console.log(minSubArrayLen(6, [1, 2, 3, 4])); // Output: 2
console.log(minSubArrayLen(5, [1, 2, 3, 1, 1, 1, 1])); // Output: 2
console.log(minSubArrayLen(10, [1, 2, 3, 4, 5])); // Output: 4
console.log(minSubArrayLen(15, [5, 1, 3, 5, 10, 7, 4, 9, 2])); // Output: 1
