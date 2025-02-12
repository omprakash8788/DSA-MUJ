/*
 Move All Zeroes to the End Using Two Pointers
Problem Statement:
Given an array of integers, move all 0s to the end of the array while maintaining the relative order of the non-zero elements.
Use the two-pointer technique and do this in-place (without using extra space for another array).

 Input: [0, 1, 0, 3, 12]  
Output: [1, 3, 12, 0, 0]  


*/
let arr=[0, 1, 0, 3, 12];
let left = 0; // Pointer to track position of non-zero elements

for (let right = 0; right < arr.length; right++) {
    if (arr[right] !== 0) {
        // Swap non-zero element with left pointer position
        [arr[left], arr[right]] = [arr[right], arr[left]];
        left++; // Move left pointer forward
    }
}

// return arr;
console.log(arr);
