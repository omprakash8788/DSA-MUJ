/*
 First Negative Number in Every Window of Size K (Sliding Window Approach)
Problem Statement:
Given an array of integers and a number K, find the first negative number in each window of size K.
If no negative number is found in a window, return 0.

Input: arr = [12, -1, -7, 8, -15, 30, 16, 28], K = 3  
Output: [-1, -1, -7, -15, -15, 0]  

*/

function firstNegativeInWindow(arr, K) {
    let result = [];
    let negatives = []; // Queue to store indices of negative numbers

    // Process the first window
    for (let i = 0; i < K; i++) {
        if (arr[i] < 0) negatives.push(i);
    }

    // Slide the window across the array
    for (let i = K; i <= arr.length; i++) {
        // Add first negative number in the result (or 0 if none)
        result.push(negatives.length > 0 ? arr[negatives[0]] : 0);

        // Remove elements that are out of the current window
        if (negatives.length > 0 && negatives[0] === i - K) {
            negatives.shift();
        }

        // Add the next element if it's negative
        if (i < arr.length && arr[i] < 0) {
            negatives.push(i);
        }
    }

    return result;
}

// Test the function
let arr = [12, -1, -7, 8, -15, 30, 16, 28];
let K = 3;
console.log(firstNegativeInWindow(arr, K));  // Output: [-1, -1, -7, -15, -15, 0]
