/*
  Find Maximum Sum Subarray of Size K (Sliding Window Approach)
Problem Statement:
Given an array and an integer K, find the maximum sum of any contiguous subarray of size K.
 
Input: arr = [2, 1, 5, 1, 3, 2], K = 3  
Output: 9  
Explanation: The subarray [5,1,3] has the maximum sum of 9.



*/

function maxSumSubarray(arr, K) {
    let windowSum = 0, maxSum = -Infinity;
    
    // Compute the sum of the first K elements
    for (let i = 0; i < K; i++) {
        windowSum += arr[i];
    }
    
    maxSum = windowSum;
    
    // Sliding Window
    for (let i = K; i < arr.length; i++) {
        windowSum += arr[i] - arr[i - K]; // Add new element, remove old element
        maxSum = Math.max(maxSum, windowSum);
    }
    
    return maxSum;
}

// Test the function
let arr = [2, 1, 5, 1, 3, 2];
let K = 3;
console.log(maxSumSubarray(arr, K));  // Output: 9
