// Kth Smallest

// Given an array arr[] and an integer k where k is smaller than the size of the array, your task is to find the kth smallest element in the given array.

// Examples :

// Input: arr[] = [7, 10, 4, 3, 20, 15], k = 3
// Output: 7
// Explanation: 3rd smallest element in the given array is 7.
// Input: arr[] = [2, 3, 1, 20, 15], k = 4
// Output: 15
// Explanation: 4th smallest element in the given array is 15.

let arr= [7, 10, 4, 3, 20, 15], k = 3;
arr.sort((a,b)=>(a-b));
let kthE=arr[k-1];
console.log(kthE)