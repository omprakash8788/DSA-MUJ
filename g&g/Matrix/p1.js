// Search a 2D Matrix


// You are given an m x n integer matrix matrix with the following two properties:

// Each row is sorted in non-decreasing order.
// The first integer of each row is greater than the last integer of the previous row.
// Given an integer target, return true if target is in matrix or false otherwise.

// You must write a solution in O(log(m * n)) time complexity.



// Input: matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 3
// Output: true

// Input: matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 13
// Output: false

let matrix = [
    [1,3,5,7],
    [10,11,16,20],
    [23,30,34,60]
]
let target = 3
// Output: true

var searchMatrix = function(matrix, target) {
   for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            if (matrix[i][j] === target) {
                return true;
            }
        }
    }
    return false; // return false only after full scan
}
console.log(searchMatrix(matrix, target))




