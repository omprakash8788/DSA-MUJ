/*
 K-Subarray Sum
 Given an array and a number k, find the sum of all the subarrays of size k.
 Example
Array: [3, 5, 6, 2, 4, 7, 8]
k: 3
Here, the subarrays of size k and their sum are:
[3 5 6] => 14
[5 6 2] => 13
[6 2 4] => 12
[2 4 7] => 13
[4 7 8] => 19
Answer: [14, 13, 12, 13, 19]

*/

let arr = [3, 5, 6, 2, 4, 7, 8];
let k = 3;

function kSubarraySum(arr, k) {
  let res = [];
  for (let i = 0; i <= arr.length - k; i++) {
    let sum = 0;
    for (let j = i; j < i + k; j++) {
      sum += arr[j];
    }
    res.push(sum);
  }
  return res;
}

console.log(kSubarraySum(arr, k));
