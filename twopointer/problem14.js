/*
 Sort an Array of 0s, 1s, and 2s Using Two Pointers (Dutch National Flag Algorithm)
Problem Statement:
Given an array containing only 0s, 1s, and 2s, sort the array in ascending order using the two-pointer technique.
Solve it in O(n) time complexity without using extra space.
Input: [2, 0, 2, 1, 1, 0]  
Output: [0, 0, 1, 1, 2, 2]  

*/

// let arr= [2, 0, 2, 1, 1, 0]  
// Output: [0, 0, 1, 1, 2, 2]  

function sortColors(arr) {
    let left = 0, mid = 0, right = arr.length - 1;

    while (mid <= right) {
        if (arr[mid] === 0) {
            // Swap 0 to the left side
            [arr[left], arr[mid]] = [arr[mid], arr[left]];
            left++;
            mid++;
        } else if (arr[mid] === 1) {
            // Keep 1s in the middle
            mid++;
        } else {
            // Swap 2 to the right side
            [arr[mid], arr[right]] = [arr[right], arr[mid]];
            right--;
        }
    }

    return arr;
}

// Test cases
console.log(sortColors([2, 0, 2, 1, 1, 0])); // Output: [0, 0, 1, 1, 2, 2]
console.log(sortColors([0, 1, 2, 0, 1, 2])); // Output: [0, 0, 1, 1, 2, 2]
console.log(sortColors([2, 2, 1, 1, 0, 0])); // Output: [0, 0, 1, 1, 2, 2]
console.log(sortColors([1, 2, 0, 1, 2, 0])); // Output: [0, 0, 1, 1, 2, 2]
console.log(sortColors([0, 0, 0])); // Output: [0, 0, 0]
console.log(sortColors([1, 1, 1])); // Output: [1, 1, 1]
console.log(sortColors([2, 2, 2])); // Output: [2, 2, 2]
console.log(sortColors([1, 2, 0])); // Output: [0, 1, 2]
console.log(sortColors([])); // Output: []


