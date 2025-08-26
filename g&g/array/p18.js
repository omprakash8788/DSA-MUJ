// Common in 3 Sorted Arrays

// Given three sorted arrays in non-decreasing order, print all common elements in non-decreasing order across these arrays. If there are no such elements return an empty array. In this case, the output will be -1.

// Note: can you handle the duplicates without using any additional Data Structure?

// Input: arr1 = [1, 5, 10, 20, 40, 80] , arr2 = [6, 7, 20, 80, 100] , arr3 = [3, 4, 15, 20, 30, 70, 80, 120]
// Output: [20, 80]
// Explanation: 20 and 80 are the only common elements in arr, brr and crr.

// Input: arr1 = [1, 2, 3, 4, 5] , arr2 = [6, 7] , arr3 = [8,9,10]
// Output: [-1]
// Explanation: There are no common elements in arr, brr and crr.


// Input: arr1 = [1, 1, 1, 2, 2, 2], B = [1, 1, 2, 2, 2], arr3 = [1, 1, 1, 1, 2, 2, 2, 2]
// Output: [1, 2]
// Explanation: We do not need to consider duplicates


let arr1 = [1, 5, 10, 20, 40, 80],
  arr2 = [6, 7, 20, 80, 100],
  arr3 = [3, 4, 15, 20, 30, 70, 80, 120];
let set1 = new Set(arr1);
let set2 = new Set(arr2);
let set3 = new Set(arr3);


let result = [];

for (let num of set1) {
  if (set2.has(num) && set3.has(num)) {
    result.push(num);
  }
}
console.log(result);
//  return result;

