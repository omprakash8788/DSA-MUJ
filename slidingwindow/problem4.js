/*
 Smallest Subarray with Sum ≥ K
Problem Statement:
Given an array of positive integers and a number K, find the length of the smallest contiguous subarray whose sum is greater than or equal to K. If no such subarray exists, return 0.

Input: arr = [2, 3, 1, 2, 4, 3], K = 7  
Output: 2  
Explanation: The subarray `[4,3]` has a sum of 7, which is the smallest possible length.

*/

function smallestSubarrayWithSumK(arr, K) {
    let left = 0, sum = 0, minLength = Infinity;

    for (let right = 0; right < arr.length; right++) {
        sum += arr[right]; // Expand window by adding new element

        // Shrink the window while sum is ≥ K
        while (sum >= K) {
            minLength = Math.min(minLength, right - left + 1);
            sum -= arr[left]; // Remove the leftmost element
            left++; // Move the left pointer
        }
    }

    return minLength === Infinity ? 0 : minLength; // If no valid subarray found, return 0
}

// 🔹 Example Test Cases
console.log(smallestSubarrayWithSumK([2, 3, 1, 2, 4, 3], 7));  // Output: 2
console.log(smallestSubarrayWithSumK([1, 4, 4], 8));           // Output: 2
console.log(smallestSubarrayWithSumK([1, 1, 1, 1, 1, 1], 11)); // Output: 0
