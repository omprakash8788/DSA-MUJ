/*
Search Insert Position
Problem Statement
Given a sorted array and a target value, write a function to find the index where the target should be inserted using binary search. If the target is found in the array, return its index. Otherwise, return the index where it would be if it were inserted in order.

Input: nums = [1,3,5,6], target = 5  
Output: 2

// Approch 
Approaches
Brute Force Approach
Idea
Traverse through the array and check if the current element is greater than or equal to the target. If so, return the index. If the loop completes without finding an appropriate position, return the length of the array.
Steps
Loop through the array.
Compare each element with the target.
Return the index if the current element is greater than or equal to the target.
If no element is greater or equal, return the length of the array.
Time Complexity
O(n) where n is the length of the array.
Space Complexity
O(1) constant space.

Dry Run
Input: nums = [1, 3, 5, 6], target = 5
Loop through the array:
At index 0: 1 < 5, continue.
At index 1: 3 < 5, continue.
At index 2: 5 == 5, return index 2.


*/

function searchInsert(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] >= target) {
      return i;
    }
  }
  return nums.length;
}

const nums = [1, 3, 5, 6];
const target = 5;
console.log(searchInsert(nums, target)); // Output: 2



/*
 Efficient Approach (Binary Search)
Idea
Since the array is already sorted, binary search can be used to reduce the time complexity to O(log n).
The idea is to repeatedly divide the search interval in half. If the target is less than the middle element, narrow the interval to the lower half. Otherwise, narrow it to the upper half.
Steps
Initialize two pointers: low = 0 and high = nums.length - 1.
Perform binary search:
Calculate the middle index: mid = Math.floor((low + high) / 2).
If nums[mid] == target, return mid.
If nums[mid] < target, set low = mid + 1.
If nums[mid] > target, set high = mid - 1.
If the loop completes, return the value of low (the position to insert the target).
Time Complexity
O(log n) due to binary search.
Space Complexity
O(1) constant space.

Dry Run
Input: nums = [1, 3, 5, 6], target = 5
low = 0, high = 3
Calculate mid: mid = 1 (nums[1] = 3)
Since 3 < 5, update low = 2.
Now low = 2, high = 3
Calculate mid: mid = 2 (nums[2] = 5)
Since 5 == 5, return 2.


function searchInsert(nums, target) {
    let low = 0, high = nums.length - 1;

    while (low <= high) {
        let mid = Math.floor((low + high) / 2);
        
        if (nums[mid] === target) {
            return mid;
        } else if (nums[mid] < target) {
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }
    
    return low;
}

const nums = [1, 3, 5, 6];
const target = 5;
console.log(searchInsert(nums, target));  // Output: 2
*/