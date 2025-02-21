/*
  Longest Subarray with Sum at Most K
👉 Find the longest subarray whose sum is ≤ K.
Longest Subarray with Sum ≤ K using Sliding Window
💡 Example:
Input: arr = [4, 1, 1, 1, 2, 3, 5], K = 5  
Output: 4  
Explanation: Subarray `[1,1,1,2]` has sum ≤ 5.

*/
function longestSubarrayWithSumK(arr, K) {
    let left = 0, sum = 0, maxLength = 0;

    for (let right = 0; right < arr.length; right++) {
        sum += arr[right]; // Expand the window by adding new element

        // If sum exceeds K, shrink from the left
        while (sum > K) {
            sum -= arr[left];
            left++;
        }

        // Update maxLength with the current valid window size
        maxLength = Math.max(maxLength, right - left + 1);
    }

    return maxLength;
}

// 🔹 Example Test Case
let arr = [4, 1, 1, 1, 2, 3, 5];
let K = 5;
console.log(longestSubarrayWithSumK(arr, K));  // Output: 4
