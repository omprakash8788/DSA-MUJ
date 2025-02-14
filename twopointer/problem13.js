/*
 Check if an Array is a Palindrome Using Two Pointers
Problem Statement:
Given an array of integers, determine whether the array is a palindrome.
An array is a palindrome if it reads the same forward and backward.
Use the two-pointer technique to solve this in O(n) time complexity.
Input: [1, 2, 3, 2, 1]  
Output: true 
*/


function isPalindrome(arr) {
    let left = 0, right = arr.length - 1;

    while (left < right) {
        if (arr[left] !== arr[right]) {
            return false; // Mismatch found, not a palindrome
        }
        left++;
        right--;
    }

    return true; // No mismatches, it's a palindrome
}

// Test Multiple cases
console.log(isPalindrome([1, 2, 3, 2, 1])); // Output: true
console.log(isPalindrome([1, 2, 3, 4, 5])); // Output: false
console.log(isPalindrome([1, 2, 2, 1])); // Output: true
console.log(isPalindrome([1, 2, 3, 3, 2, 1])); // Output: true
console.log(isPalindrome([1, 2, 3, 4, 2, 1])); // Output: false
console.log(isPalindrome([1])); // Output: true (single element is always a palindrome)
console.log(isPalindrome([])); // Output: true (empty array is trivially a palindrome)

