/*
 Sum of First and Last Elements Using Two Pointers:
 Given an array, use the two-pointer technique to find the sum of the first and last elements.
 Input: [5, 10, 15, 20]  
 Output: 25  (5 + 20)  
 
*/

let arr=[5, 10, 15, 20] 
let left=0;
let right=arr.length-1
// console.log(right);
let sum=arr[left]+arr[right]
console.log(sum);
