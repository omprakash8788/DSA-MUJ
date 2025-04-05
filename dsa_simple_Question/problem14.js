/*
  Largest Contiguous Sum
  A subarray is a part of an array including one or more contiguous/adjacent elements.

  Array: [1, 2, 3, 4, 5]

Subarrays:
[1]
[2]
[3]
[4]
[5]
[1, 2]
[2, 3]
[3, 4]
[4, 5]
[1, 2, 3]
[2, 3, 4]
[3, 4, 5]
[1, 2, 3, 4]
[2, 3, 4, 5]
[1, 2, 3, 4, 5]
If we find the sum of the elements of any subarray then that sum will be known as a contiguous sum.

Example
[1] => 1
[2] => 2
[3] => 3
[4] => 4
[5] => 5
[1, 2] => 3
[2, 3] => 5
[3, 4] => 7
[4, 5] => 9
[1, 2, 3] => 6
[2, 3, 4] => 9
[3, 4, 5] => 12
[1, 2, 3, 4] => 10
[2, 3, 4, 5] => 14
[1, 2, 3, 4, 5] => 15

You are given an array of numbers (could be -ve as well). You need to find the largest contiguous sum from the array.

*/

// Expected output -  7
// function largestContiguousSum(arr) {
//     let maxSoFar = arr[0];
//     let currentMax = arr[0];
  
//     for (let i = 1; i < arr.length; i++) {
//       currentMax = Math.max(arr[i], currentMax + arr[i]);
//       maxSoFar = Math.max(maxSoFar, currentMax);

//     }
  
//     return maxSoFar;
//   }
  
//   // Example usage:
//   const arr = [1, 2, 3, 4, 5];
//   console.log(largestContiguousSum(arr)); // Output: 15
  

function printAllContiguousSums(arr) {
    for (let start = 0; start < arr.length; start++) {
      let sum = 0;
      let subarray = [];
  
      for (let end = start; end < arr.length; end++) {
        subarray.push(arr[end]);
        sum += arr[end];
        console.log(`[${subarray.join(', ')}] => ${sum}`);
      }
    }
  }
  
  // Example usage
  const arr = [1, 2, 3, 4, 5];
  printAllContiguousSums(arr);
  