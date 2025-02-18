/*
  Longest Mountain in an Array (Two Pointers Approach)
Problem Statement:
Given an array arr, find the length of the longest mountain.
A mountain is defined as:

It has at least 3 elements.
It strictly increases to a peak, then strictly decreases.
Return the length of the longest mountain or 0 if no valid mountain exists.

 Input: arr = [2,1,4,7,3,2,5]  
Output: 5  
Explanation: The longest mountain is [1,4,7,3,2] (length `5`).

*/

function longestMountain(arr) {
    let maxLength = 0, n = arr.length;

    for (let i = 1; i < n - 1; i++) {
        // Check if arr[i] is a peak
        if (arr[i] > arr[i - 1] && arr[i] > arr[i + 1]) {
            let left = i, right = i;
            
            // Expand left while strictly decreasing
            while (left > 0 && arr[left] > arr[left - 1]) {
                left--;
            }

            // Expand right while strictly decreasing
            while (right < n - 1 && arr[right] > arr[right + 1]) {
                right++;
            }

            // Calculate the length of the mountain
            maxLength = Math.max(maxLength, right - left + 1);
        }
    }

    return maxLength >= 3 ? maxLength : 0; // Must be at least 3 elements
}

// Test cases
console.log(longestMountain([2,1,4,7,3,2,5])); // Output: 5
console.log(longestMountain([2,2,2])); // Output: 0
console.log(longestMountain([0,1,2,3,4,5,2,1,0])); // Output: 9
console.log(longestMountain([1,3,2,1,2,3,4,5,6,2,0])); // Output: 7
console.log(longestMountain([1,2,3,4,5])); // Output: 0
