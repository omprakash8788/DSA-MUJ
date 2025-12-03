/*

  Find Only Missing Number
Problem Statement
You are given a sorted array of N integers from 1 to N with one number missing. Find the missing number.

Examples
Example 1:
Input: ar[] = {1, 3, 4, 5}
Output: 2

Example 2:
Input: ar[] = {1, 2, 3, 4, 5, 7, 8}
Output: 6


Approach 1: Brute Force
Idea
Check every number from 1 to N to see if it's missing in the array.

Steps
Iterate from 1 to N.
For each number, check if it is present in the array.
If a number is missing, return it.
Time Complexity
O(n^2) (due to searching in an array for each number)
Space Complexity
O(1)


 
*/

function findMissingBruteForce(arr) {
    for (let i = 1; i <= arr.length + 1; i++) {
        if (!arr.includes(i)) {
            return i;
        }
    }
    return -1;
}

const arr = [1, 3, 4, 5];
console.log(findMissingBruteForce(arr));


/*
 Approach 2: Efficient Approach (Binary Search)
Idea
Use binary search to identify where the missing element is by comparing the values with their expected indices.

Steps
Initialize left = 0 and right = N-1.
Perform binary search:
Calculate mid.
If arr[mid] matches mid + 1, the missing element is on the right.
Otherwise, it's on the left.
Continue until left points to the missing number.
Time Complexity
O(log n)
Space Complexity
O(1)

function findMissingEfficient(arr) {
    let left = 0, right = arr.length - 1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        
        if (arr[mid] === mid + 1) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    
    return left + 1;
}

const arr = [1, 3, 4, 5];
console.log(findMissingEfficient(arr));  // Output: 2
*/
