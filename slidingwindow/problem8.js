/*
 Longest Subarray of 1s After Replacing at Most K Zeros
📌 Problem Statement
Given a binary array arr (containing only 0s and 1s), find the longest subarray containing only 1s after replacing at most K zeros.

Input: arr = [1,1,0,0,1,1,1,0,1,1,1,1], K = 2  
Output: 8  
Explanation: By changing two `0`s to `1`, we get [1,1,1,1,1,1,1,1]


*/

function longestOnes(arr, K) {
    let left = 0, maxLen = 0, zeroCount = 0;

    for (let right = 0; right < arr.length; right++) {
        if (arr[right] === 0) zeroCount++;

        while (zeroCount > K) {
            if (arr[left] === 0) zeroCount--;
            left++;
        }

        maxLen = Math.max(maxLen, right - left + 1);
    }

    return maxLen;
}

console.log(longestOnes([1,1,0,0,1,1,1,0,1,1,1,1], 2)); // Output: 8
