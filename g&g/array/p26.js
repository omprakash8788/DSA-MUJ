// Minimum swaps and K together

// Given an array arr and a number k. One can apply a swap operation on the array any number of times, i.e choose any two index i and j (i < j) and swap arr[i] , arr[j] . Find the minimum number of swaps required to bring all the numbers less than or equal to k together, i.e. make them a contiguous subarray.

// Examples :

// Input: arr[] = [2, 1, 5, 6, 3], k = 3
// Output: 1
// Explanation: To bring elements 2, 1, 3 together, swap index 2 with 4 (0-based indexing), i.e. element arr[2] = 5 with arr[4] = 3 such that final array will be- arr[] = [2, 1, 3, 6, 5]

// Input: arr[] = [2, 7, 9, 5, 8, 7, 4], k = 6 
// Output: 2 
// Explanation: To bring elements 2, 5, 4 together, swap index 0 with 2 (0-based indexing) and index 4 with 6 (0-based indexing) such that final array will be- arr[] = [9, 7, 2, 5, 4, 7, 8]


// Input: arr[] = [2, 4, 5, 3, 6, 1, 8], k = 6 
// Output: 0


let arr= [2, 1, 5, 6, 3], k = 3

   // code here
         let n = arr.length;

    // Step 1: Count how many elements are ≤ k
    let count = 0;
    for (let num of arr) {
        if (num <= k) count++;
    }

    // Step 2: Find how many "bad" elements (> k) are in the first window of size 'count'
    let bad = 0;
    for (let i = 0; i < count; i++) {
        if (arr[i] > k) bad++;
    }

    // Step 3: Slide the window and find the minimum bad count
    let minSwaps = bad;
    for (let i = 0, j = count; j < n; i++, j++) {
        if (arr[i] > k) bad--;  // Element going out of window
        if (arr[j] > k) bad++;  // Element coming into window
        minSwaps = Math.min(minSwaps, bad);
    }

    console.log(minSwaps)
    // return minSwaps;