// Array Subset

// Given two arrays a[] and b[], your task is to determine whether b[] is a subset of a[].

// Input: a[] = [11, 7, 1, 13, 21, 3, 7, 3], b[] = [11, 3, 7, 1, 7]
// Output: true
// Explanation: b[] is a subset of a[]


// Input: a[] = [1, 2, 3, 4, 4, 5, 6], b[] = [1, 2, 4]
// Output: true
// Explanation: b[] is a subset of a[]


// Input: a[] = [10, 5, 2, 23, 19], b[] = [19, 5, 3]
// Output: false
// Explanation: b[] is not a subset of a[]

let a= [11, 7, 1, 13, 21, 3, 7, 3], b= [11, 3, 7, 1, 7]
let freq = {};

    // Count frequency of elements in a[]
    for (let num of a) {
        freq[num] = (freq[num] || 0) + 1;
    }

    // Check each element in b[]
    for (let num of b) {
        if (!freq[num]) {
            console.log(false)
            // return false; // Element not found or not enough occurrences
        }
        freq[num]--; // Reduce count for duplicate tracking
    }
    console.log(true)
    // return true;