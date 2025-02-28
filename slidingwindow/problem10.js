/*
  Find Maximum Average Subarray of Size K
📌 Problem Statement
Given an integer array arr and integer K, find the maximum average of any contiguous subarray of size K.

Input: arr = [1,12,-5,-6,50,3], K = 4  
Output: 12.75  
Explanation: The subarray [12,-5,-6,50] has an average of (12-5-6+50)/4 = 12.75.


*/

function findMaxAverage(arr, K) {
    let sum = 0, maxAvg = -Infinity;

    for (let i = 0; i < K; i++) {
        sum += arr[i]; // Initial window sum
    }
    maxAvg = sum / K;

    for (let i = K; i < arr.length; i++) {
        sum += arr[i] - arr[i - K]; // Slide window
        maxAvg = Math.max(maxAvg, sum / K);
    }

    return maxAvg;
}

console.log(findMaxAverage([1,12,-5,-6,50,3], 4)); // Output: 12.75
