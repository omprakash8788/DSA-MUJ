/*
 Given an array of positive integers arr[] of size n, the task is to find second largest distinct element in the array.

Note: If the second largest element does not exist, return -1.

Examples:

Input: arr[] = [12, 35, 1, 10, 34, 1]
Output: 34
Explanation: The largest element of the array is 35 and the second largest element is 34.

*/

// JavaScript program to find second largest element in an array
// using Sorting

// function to find the second largest element
function getSecondLargest(arr) {
    let n = arr.length;
    
    // Sort the array in non-decreasing order
    arr.sort((a, b) => a - b);
  
    // start from second last element as last element is the largest
    for (let i = n - 2; i >= 0; i--) {
      
        // return the first element which is not equal to the 
        // largest element
        if (arr[i] !== arr[n - 1]) {
            return arr[i];
        }
    }
  
    // If no second largest element was found, return -1
    return -1;
}

const arr = [12, 35, 1, 10, 34, 1];
console.log(getSecondLargest(arr));
