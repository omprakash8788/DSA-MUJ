/*
 Find the Pair with the Maximum Product Using Two Pointers
Problem Statement:
Given a sorted array of integers, find the pair of numbers whose product is the maximum.
Use the two-pointer technique to solve this in O(n) time complexity.
 Input: arr = [-10, -3, 1, 2, 5, 6]  
Output: [5, 6] (since 5 × 6 = 30)  

*/
let arr = [-10, -3, 1, 2, 5, 6];

function maxProductPair(arr) {
    let n = arr.length;
    if (n < 2) return null; // Not enough elements for a pair

    // The max product can be from:
    // - The two largest positive numbers (arr[n-2] * arr[n-1])
    // - The two smallest negative numbers (arr[0] * arr[1])
    
    let product1 = arr[0] * arr[1]; // Leftmost two (negative numbers)
    let product2 = arr[n - 2] * arr[n - 1]; // Rightmost two (largest numbers)

    return product1 > product2 ? [arr[0], arr[1]] : [arr[n - 2], arr[n - 1]];
}

// Test cases
console.log(maxProductPair([-10, -3, 1, 2, 5, 6])); 
