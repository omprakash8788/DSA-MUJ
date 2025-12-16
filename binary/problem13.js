/*
  Peak in Mountain Array
Problem Statement
You are given an integer mountain array arr of length n where the values increase to a peak element and then decrease.


Return the index of the peak element.

Your task is to solve it in O(log(n)) time complexity.

Example 1
Input: arr = [0,1,0]
Output: 1
Example 2
Input: arr = [0,2,1,0]
Output: 1
Example 3
Input: arr = [0,10,5,2]
Output: 1


Approaches
Brute Force
Idea
We can linearly traverse the array to find the peak element by comparing each element with its neighbors.

Steps
Iterate over the array from index 1 to n-2.
For each index i, check if arr[i] > arr[i+1] and arr[i] > arr[i-1].
If true, return the index i as the peak.
Time Complexity
O(n) because we are linearly traversing the array.
Space Complexity
O(1) as we are not using any extra space.


*/

function peakIndexInMountainArray(arr) {
    for (let i = 1; i < arr.length - 1; i++) {
        if (arr[i] > arr[i+1] && arr[i] > arr[i-1]) {
            return i;
        }
    }
}
const arr = [0, 10, 5, 2];
console.log(peakIndexInMountainArray(arr));  // Output: 1

/*
 Efficient Approach (Binary Search)
Idea
We can optimize the solution using binary search. If arr[mid] > arr[mid+1], the peak lies to the left; otherwise, it lies to the right.

Steps
Initialize two pointers l = 0 and h = arr.length - 1.
Perform binary search while l <= h:
Calculate mid = Math.floor((l + h) / 2).
If arr[mid] > arr[mid + 1], update h = mid - 1.
Else, update l = mid + 1.
Return the peak index.
Time Complexity
O(log(n)) because binary search is used.
Space Complexity
O(1) as we are using constant extra space.


function peakIndexInMountainArray(arr) {
    let l = 0, h = arr.length - 1;
    while (l <= h) {
        let mid = Math.floor((l + h) / 2);
        if (arr[mid] > arr[mid + 1]) {
            h = mid - 1;
        } else {
            l = mid + 1;
        }
    }
    return l;
}
const arr = [0, 10, 5, 2];
console.log(peakIndexInMountainArray(arr));  // Output: 1

*/
