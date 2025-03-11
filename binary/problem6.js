/*
 Count Occurrence of Target Element
Problem Statement
Given a sorted array, write a function to count the number of occurrences of a target element using binary search. The function should return the number of times the target appears in the array.

Sample Test Case
Input: nums = [1, 2, 2, 2, 3, 4, 5], target = 2  
Output: 3


Approaches
Brute Force Approach
Idea
Traverse through the array, and count each occurrence of the target element by comparing each element with the target.
Steps
Loop through the array.
Compare each element with the target.
Increment the count if the element equals the target.
Return the count after completing the loop.
Time Complexity
O(n) where n is the length of the array.
Space Complexity
O(1) constant space.


*/

function  countOccurrences(nums, target){
   count=0;
   for(let i=0; i<nums.length; i++){
    if(nums[i]===target){
        count++
    }
   }
return count;
}

const nums = [1, 2, 2, 2, 3, 4, 5];
const target = 2;
console.log(countOccurrences(nums, target)); 


/*
 Dry Run
Input: nums = [1, 2, 2, 2, 3, 4, 5], target = 2
Initialize count = 0.
Loop through the array:
At index 1: 2 == 2, increment count.
At index 2: 2 == 2, increment count.
At index 3: 2 == 2, increment count.
Output: count = 3.
Efficient Approach (Binary Search)
Idea
Use binary search to find the first and last occurrences of the target. The number of occurrences will be the difference between the indices of the last and first occurrences plus one.
Steps
Perform binary search to find the first occurrence of the target.
Perform binary search to find the last occurrence of the target.
Return the difference between the indices of the last and first occurrences, plus one.
Time Complexity
O(log n) due to binary search.
Space Complexity
O(1) constant space.


function countOccurrences(nums, target) {
    function findFirst(nums, target) {
        let low = 0, high = nums.length - 1, first = -1;
        while (low <= high) {
            let mid = Math.floor((low + high) / 2);
            if (nums[mid] === target) {
                first = mid;
                high = mid - 1; // search in the left half
            } else if (nums[mid] < target) {
                low = mid + 1;
            } else {
                high = mid - 1;
            }
        }
        return first;
    }

    function findLast(nums, target) {
        let low = 0, high = nums.length - 1, last = -1;
        while (low <= high) {
            let mid = Math.floor((low + high) / 2);
            if (nums[mid] === target) {
                last = mid;
                low = mid + 1; // search in the right half
            } else if (nums[mid] < target) {
                low = mid + 1;
            } else {
                high = mid - 1;
            }
        }
        return last;
    }
    
    let first = findFirst(nums, target);
    if (first === -1) return 0; // target not found
    
    let last = findLast(nums, target);
    return last - first + 1;
}

const nums = [1, 2, 2, 2, 3, 4, 5];
const target = 2;
console.log(countOccurrences(nums, target));  // Output: 3
*/