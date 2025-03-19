/*
  Degree of Rotation
Problem Statement
Given an array arr[] of size N having distinct numbers sorted in increasing order, and the array has been right rotated k number of times (i.e., the last element will be cyclically shifted to the starting position of the array), the task is to find the value of k.

Example 1
Input: arr = [15, 18, 2, 3, 6, 12]
Output: 2
Explanation: Initial array must be [2, 3, 6, 12, 15, 18]. The array is rotated 2 times to reach the given configuration.
Example 2
Input: arr = [7, 9, 11, 12, 5]
Output: 4
Example 3
Input: arr = [7, 9, 11, 12, 15]
Output: 0

Approaches
Brute Force
Idea
We can linearly traverse the array to find the smallest element and its index. The number of rotations k is the index of the minimum element.

Steps
Traverse the array to find the smallest element.
The index of the smallest element is the number of rotations k.
Time Complexity
O(n) because we are linearly traversing the array.
Space Complexity
O(1) as we are not using any extra space.


*/

function countRotations(arr) {
    let min = arr[0];
    let minIndex = 0;
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
            minIndex = i;
        }
    }
    return minIndex;
}

const arr = [15, 18, 2, 3, 6, 12];
console.log(countRotations(arr));  // Output: 2


/*
 Efficient Approach (Binary Search)
Idea
We can optimize the solution using binary search. The smallest element will be at the index where the array has been rotated.

Steps
Initialize low = 0 and high = arr.length - 1.
Perform binary search:
If the middle element is smaller than its previous element, it is the pivot (smallest element).
If the middle element is greater than the last element, search in the right half.
Else, search in the left half.
Return the index of the smallest element, which gives the number of rotations.
Time Complexity
O(log(n)) because binary search is used.
Space Complexity
O(1) as we are using constant extra space.

function countRotations(arr, low, high) {
    if (high < low) return 0;
    if (high == low) return low;

    let mid = Math.floor((low + high) / 2);

    if (mid < high && arr[mid + 1] < arr[mid]) return mid + 1;
    if (mid > low && arr[mid] < arr[mid - 1]) return mid;

    if (arr[high] > arr[mid]) return countRotations(arr, low, mid - 1);
    return countRotations(arr, mid + 1, high);
}

const arr = [7, 9, 11, 12, 5];
console.log(countRotations(arr, 0, arr.length - 1));  // Output: 4

*/