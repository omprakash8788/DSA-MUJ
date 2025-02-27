/*
  Maximum Consecutive Ones (No Replace Allowed)
📌 Problem Statement
Given a binary array arr, find the length of the longest contiguous subarray of only 1s.

Input: arr = [1,1,0,1,1,1,0,1,1]  
Output: 3  


*/

function maxConsecutiveOnes(arr) {
    let maxCount = 0, count = 0;

    for (let num of arr) {
        if (num === 1) {
            count++;
            maxCount = Math.max(maxCount, count);
        } else {
            count = 0;
        }
    }

    return maxCount;
}

console.log(maxConsecutiveOnes([1,1,0,1,1,1,0,1,1])); // Output: 3
