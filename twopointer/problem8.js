/*
 Check If an Array is a Palindrome Using Two Pointers
Problem Statement:
Given an array of integers, use the two-pointer technique to check if the array is a palindrome. An array is considered a palindrome if it reads the same forward and backward.
 Input: [1, 2, 3, 2, 1]  
Output: true  


*/
let arr=[1, 2, 3, 2, 1];
let left = 0, right = arr.length - 1;

while (left < right) {
    if (arr[left] !== arr[right]) {
        // return false; // Not a palindrome
        console.log("false");
        
    }
    left++;
    right--;
}

// return true; // It is a palindrome
console.log("true");
