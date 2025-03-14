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


  /*
   Efficient Approach (Binary Search)
Idea:

Use binary search to find the missing element. Since the array is sorted and forms an arithmetic progression, the missing element must lie where the progression deviates from the expected values.
Steps:

Set two pointers low = 0 and high = n-1.
Calculate the common difference d.
Use binary search to find the missing element by checking whether the middle element is in its correct position relative to the common difference.
Adjust the low and high pointers based on whether the missing element lies in the left or right half.
Time Complexity: O(log n)

Space Complexity: O(1)

 function findMissingBinarySearch(arr) {
  let low = 0, high = arr.length - 1;
  let d = (arr[high] - arr[0]) / arr.length;
  
  while (low <= high) {
    let mid = Math.floor((low + high) / 2);

    // Check if the element at mid is in the expected position
    if (arr[mid] == arr[0] + mid * d) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
  
  // The missing element is between low and high
  return arr[0] + low * d;
}

const arr = [1, 3, 5, 7, 11];
console.log(findMissingBinarySearch(arr));  // Output: 9
  */