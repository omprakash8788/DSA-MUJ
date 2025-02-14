/*
 Find the Intersection of Two Sorted Arrays Using Two Pointers
Problem Statement:
Given two sorted arrays, find their intersection (common elements). Each element in the result should appear as many times as it appears in both arrays.
Use the two-pointer technique and solve the problem in O(n + m) time complexity.
 Input: arr1 = [1, 2, 2, 3, 4], arr2 = [2, 2, 4, 6]  
Output: [2, 2, 4]  

*/
let  arr1 = [1, 2, 2, 3, 4]
let arr2 = [2, 2, 4, 6];



function findIntersection(arr1, arr2) {
    let i = 0, j = 0;
    let intersection = [];

    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] === arr2[j]) {
            intersection.push(arr1[i]); // Common element found
            i++;
            j++;
        } else if (arr1[i] < arr2[j]) {
            i++; // Move pointer in arr1 to catch up
        } else {
            j++; // Move pointer in arr2 to catch up
        }
    }

    return intersection;
}

// Test cases
console.log(findIntersection([1, 2, 2, 3, 4], [2, 2, 4, 6]));
