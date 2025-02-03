/*
Maximum and Minimum of an array using number of comparisons.
Given an array of size N. The task is to find the maximum and the minimum element of the array using the minimum number of comparisons.

Example
let arr=[3,5,4,1,9]
Expected output: Minimum element is :1
                 Minimum element is :9


*/

let arr=[3,5,4,1,9];
let min=arr[0]
let max=arr[0]
for(let i=0; i<arr.length; i++){
    if(arr[i]<min){
        min=arr[i]
    }
    else if(arr[i]>max){
        max=arr[i]

    }
}
console.log(min, max);
