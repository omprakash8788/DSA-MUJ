/*
 Find All Pairs That Sum to a Target Using Two Pointers
Problem Statement:
Given a sorted array of integers and a target sum, use the two-pointer technique to find all pairs that add up to the target. If no pairs exist, return an empty array.
Input: arr = [1, 2, 3, 4, 6], target = 6  
Output: [[2, 4]]  (since 2 + 4 = 6)

Input: arr = [1, 2, 2, 3, 4, 4, 5, 6], target = 6  
Output: [[2, 4], [2, 4]]

*/
































let arr = [1, 2, 3, 4, 6];
let target = 6  ;
let left = 0, right = arr.length - 1;
let result = [];

while (left < right) {
    let sum = arr[left] + arr[right];

    if (sum === target) {
        result.push([arr[left], arr[right]]); // Store the pair
        left++;  // Move both pointers to find more pairs
        right--;
    } else if (sum < target) {
        left++;  // Increase sum
    } else {
        right--; // Decrease sum
    }
}

// return result.length > 0 ? result : [];
console.log(result.length > 0 ? result : []);
