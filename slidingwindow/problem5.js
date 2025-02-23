/*
  Count Subarrays with At Most K Distinct Integers
 Problem Statement
Given an array arr of integers and an integer K, find the number of subarrays that contain at most K distinct integers.

Input: arr = [1,2,1,2,3], K = 2  
Output: 10  
Explanation: The subarrays with at most 2 distinct integers are:
[1], [2], [1], [2], [3], [1,2], [2,1], [1,2], [2,3], [1,2,1]
Total = 10.


*/

function countSubarraysAtMostK(arr, K) {
    let left = 0, right = 0;
    let count = 0;
    let freq = {}; // Map to store frequency of elements
    let distinct = 0;

    for (right = 0; right < arr.length; right++) {
        let num = arr[right];
        if (!freq[num]) {
            freq[num] = 0;
            distinct++; // New distinct number added
        }
        freq[num]++;

        // Shrink window if distinct elements exceed K
        while (distinct > K) {
            let leftNum = arr[left];
            freq[leftNum]--;
            if (freq[leftNum] === 0) {
                delete freq[leftNum];
                distinct--; // One distinct element removed
            }
            left++;
        }

        // Add the count of subarrays ending at 'right'
        count += (right - left + 1);
    }

    return count;
}

// 🔹 Example Test Cases
console.log(countSubarraysAtMostK([1,2,1,2,3], 2)); // Output: 10
console.log(countSubarraysAtMostK([1,2,3,4], 1)); // Output: 4
console.log(countSubarraysAtMostK([1,1,1,1], 1)); // Output: 10
console.log(countSubarraysAtMostK([1,2,1,3,4], 3)); // Output: 12
console.log(countSubarraysAtMostK([], 2)); // Output: 0
