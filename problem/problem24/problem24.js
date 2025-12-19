/*
Given an integer array arr[]. You need to find the maximum sum of a subarray.

  Examples:

Input: arr[] = [2, 3, -8, 7, -1, 2, 3]
Output: 11
Explanation: The subarray {7, -1, 2, 3} has the largest sum 11.


Input: arr[] = [-2, -4]
Output: -2
Explanation: The subarray {-2} has the largest sum -2.


*/

let arr = [2, 3, -8, 7, -1, 2, 3];
// let currentSum = arr[0]; 
// let maxGlobal = arr[0]; 

// for (let i = 1; i < arr.length; i++) {
//     currentSum = Math.max(arr[i], currentSum + arr[i]);
//     maxGlobal = Math.max(maxGlobal, currentSum); // Cleaner update
// }

// // return maxGlobal;
// console.log(maxGlobal);

// let arr = [1, 2, 3]; // Example array

// for (let i = 0; i < arr.length; i++) {
//   let subArray = [];
//   for (let j = i; j < arr.length; j++) {
//     subArray.push(arr[j]); 
//     console.log(subArray); 
//   }
// }



// let arr = [1, 2, 3]; // Example array

for (let i = 0; i < arr.length; i++) {
  let subArray = [];
  let sum = 0; 
  for (let j = i; j < arr.length; j++) {
    subArray.push(arr[j]); 
    sum += arr[j]; 
    console.log(`Subarray: ${subArray}, Sum: ${sum}`);
  }
}

