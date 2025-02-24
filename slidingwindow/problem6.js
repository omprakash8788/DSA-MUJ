/*
 Sum of all subarrays of size K

 Given an array arr[] and an integer K, the task is to calculate the sum of all subarrays of size K.

 Input: arr[] = {1, 2, 3, 4, 5, 6}, K = 3 
Output: 6 9 12 15 
Explanation: 
All subarrays of size k and their sum: 
Subarray 1: {1, 2, 3} = 1 + 2 + 3 = 6 
Subarray 2: {2, 3, 4} = 2 + 3 + 4 = 9 
Subarray 3: {3, 4, 5} = 3 + 4 + 5 = 12 
Subarray 4: {4, 5, 6} = 4 + 5 + 6 = 15


*/

function calcSum(arr, n, k) {
  // Loop to consider every
  // subarray of size K
  for (var i = 0; i <= n - k; i++) {
    // Initialize sum = 0
    var sum = 0;

    // Calculate sum of all elements
    // of current subarray
    for (var j = i; j < k + i; j++) sum += arr[j];

    console.log(sum);
  }
}

var arr = [1, 2, 3, 4, 5, 6];
var n = arr.length;
var k = 3;

calcSum(arr, n, k);
