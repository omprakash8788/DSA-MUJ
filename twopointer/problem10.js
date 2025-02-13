/*
 Remove Duplicates from a Sorted Array Using Two Pointers
Problem Statement:
Given a sorted array, remove the duplicate elements in-place such that each unique element appears only once. The function should return the length of the new array, with the first part of the array containing the unique elements in order.

You must do this in-place without using extra space.
 Input: [1, 1, 2]  
 Output: 2, arr = [1, 2, _]  

*/
function removeDuplicates(arr) {
    if (arr.length === 0) return 0;

    let left = 0; // Pointer for placing unique elements

    for (let right = 1; right < arr.length; right++) {
        if (arr[right] !== arr[left]) {
            left++; 
            arr[left] = arr[right]; // Move unique element forward
        }
    }

    return left + 1; // Length of unique elements
}

// Test cases
let arr1 = [1, 1, 2];
console.log(removeDuplicates(arr1)); // Output: 2, [1, 2, _]


