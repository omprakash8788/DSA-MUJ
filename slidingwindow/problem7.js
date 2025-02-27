/*
 Longest Subarray with Sum Exactly K
📌 Problem Statement
Given an array arr of integers and an integer K, find the length of the longest contiguous subarray whose sum is exactly K.

Input: arr = [1, 2, 3, 4, 5], K = 9  
Output: 3  
Explanation: The longest subarray with sum exactly 9 is `[2,3,4]`, which has a length of 3.


🔹 Approach (Sliding Window)
We will use the Sliding Window (Variable Size) approach to solve this efficiently:

1️⃣ Use two pointers (left and right) to define a window.
2️⃣ Expand right and keep adding elements to the sum.
3️⃣ If sum exceeds K, move left forward to reduce the window size.
4️⃣ Whenever sum == K, update the maximum length.
5️⃣ Continue this process until the end of the array.


*/

function longestSubarrayWithSumK(arr, K) {
    let left = 0, right = 0, sum = 0, maxLen = 0;

    while (right < arr.length) {
        sum += arr[right]; // Expand window by adding right element

        // Shrink window if sum exceeds K
        while (sum > K) {
            sum -= arr[left];
            left++;
        }

        // If sum is exactly K, update max length
        if (sum === K) {
            maxLen = Math.max(maxLen, right - left + 1);
        }

        right++; // Move right pointer forward
    }

    return maxLen;
}

// 🔹 Example Test Cases
console.log(longestSubarrayWithSumK([1, 2, 3, 4, 5], 9)); // Output: 3 (Subarray: [2,3,4])
console.log(longestSubarrayWithSumK([4, 1, 1, 1, 2, 3, 5], 5)); // Output: 4 (Subarray: [1,1,1,2])
console.log(longestSubarrayWithSumK([3, 1, 2, 1, 1, 1, 2, 3], 6)); // Output: 4 (Subarray: [1,2,1,2])
console.log(longestSubarrayWithSumK([1, 2, 3], 7)); // Output: 0 (No subarray found)



