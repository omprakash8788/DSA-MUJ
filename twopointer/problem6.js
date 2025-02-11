/*
 Find Two Elements That Sum to a Target Using Two Pointers
Problem Statement:
Given a sorted array of integers and a target sum, use the two-pointer technique to find two numbers that add up to the target. If multiple pairs exist, return any one of them. If no such pair exists, return null.
 Input: arr = [1, 2, 3, 4, 6], target = 6  
Output: [2, 4]  (since 2 + 4 = 6)

*/

let arr = [1, 2, 3, 4, 6];
let target = 6;
let left = 0, right = arr.length - 1;
let found = false;

while (left < right) {
    let sum = arr[left] + arr[right];

    if (sum === target) {
        console.log([arr[left], arr[right]]); // Print the pair
        found = true;
        break; // Stop after finding one pair
    } else if (sum < target) {
        left++; // Move left pointer forward to increase sum
    } else {
        right--; // Move right pointer backward to decrease sum
    }
}

// If no pair is found, print null
if (!found) console.log(null);
