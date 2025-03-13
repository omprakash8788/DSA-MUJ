/*
Find Missing Element
Problem Statement:
Given a sorted array representing an arithmetic progression (AP), one element is missing. Write a function to find the missing element using binary search.

Sample Example:

Input: arr = [1, 3, 5, 7, 11]

Output: 9

Explanation: The missing element in the arithmetic progression is 9, which is the expected value between 7 and 11 based on the common difference of 2.

Approaches
Brute Force Approach
Idea:

Calculate the expected difference d in the progression. Then, iterate through the array and find the position where the difference between consecutive elements is not equal to d. The missing number is found at this position.
Steps:

Calculate the common difference d.
Iterate through the array to find the first occurrence where the difference between consecutive elements is not equal to d.
Return the missing number based on this mismatch.
Time Complexity: O(n)

Space Complexity: O(1)

  
*/

function findMissingBruteForce(arr) {
    let n = arr.length;
    let d = (arr[n - 1] - arr[0]) / n;
    
    for (let i = 0; i < n - 1; i++) {
      if (arr[i + 1] - arr[i] != d) {
        return arr[i] + d;
      }
    }
    
    return -1; // If no element is missing
  }
  
  const arr = [1, 3, 5, 7, 11];
  console.log(findMissingBruteForce(arr));  // Output: 9
