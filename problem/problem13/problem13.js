/*
 Given an array of integers, find the sum of its elements.

For example, if the array , , so return .

 Sample Input

let n=6
let arr=[1, 2, 3, 4, 10, 11]
Expected output=31


*/

let n=6
let arr=[1, 2, 3, 4, 10, 11]
let sum=0;
for(let i=0; i<n; i++){
    sum=sum+arr[i]
}
console.log(sum);
