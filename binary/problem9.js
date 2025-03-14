/*
  Closest Element in Sorted Array
Problem Statement
Given a sorted array and a target value, find the element in the array that is closest to the target using binary search.

Sample Test Case
Input: arr = [1, 3, 5, 8, 12, 15], target = 7
Output: 8
Approaches
Brute Force
Idea
Iterate over the array and check the absolute difference between each element and the target. Track the element with the smallest difference.

Steps
Initialize minDiff to a large number.
Traverse each element in the array.
Calculate the absolute difference between the current element and the target.
Update minDiff and closestElement if a smaller difference is found.
Return the closest element.
Time Complexity
O(n) where n is the length of the array.
Space Complexity
O(1) since only a few extra variables are used.

 */

function findClosestBruteForce(arr, target) {
  let minDiff = Infinity;
  let closestElement = arr[0];

  for (let i = 0; i < arr.length; i++) {
    let diff = Math.abs(arr[i] - target);
    if (diff < minDiff) {
      minDiff = diff;
      closestElement = arr[i];
    }
  }

  return closestElement;
}

const arr = [1, 3, 5, 8, 12, 15];
const target = 7;
console.log(findClosestBruteForce(arr, target)); // Output: 8

/*
 Efficient Approach (Binary Search)
Idea
Use binary search to efficiently find the closest element by narrowing down the search space.

Steps
Use binary search to find the closest element or the position where the target would fit.
Compare the target with the nearest elements (left and right).
Return the closest element.
Time Complexity
O(log n) due to the binary search.
Space Complexity
O(1) as no additional space is required.

 function findClosestBinarySearch(arr, target) {
    let left = 0, right = arr.length - 1;

    if (target <= arr[0]) return arr[0];
    if (target >= arr[arr.length - 1]) return arr[arr.length - 1];
    
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        
        if (arr[mid] === target) {
            return arr[mid];
        } else if (arr[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    
    // At this point, left is greater than right, and the target lies between arr[right] and arr[left]
    if ((target - arr[right]) <= (arr[left] - target)) {
        return arr[right];
    } else {
        return arr[left];
    }
}

const arr = [1, 3, 5, 8, 12, 15];
const target = 7;
console.log(findClosestBinarySearch(arr, target));  // Output: 8
*/
