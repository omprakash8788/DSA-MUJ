/*
  Given an array of integers, the task is to find the length of the longest subsequence such that elements in the subsequence are consecutive integers, the consecutive numbers can be in any order.

Input: arr[] = [2, 6, 1, 9, 4, 5, 3]
Output: 6
Explanation: The consecutive numbers here are from 1 to 6. These 6 numbers form the longest consecutive subsequence [2, 6, 1, 4, 5, 3].

*/
let arr=[2, 6, 1, 9, 4, 5, 3];

arr.sort((a,b)=>a-b)

// console.log(arr);
let max=0;
let count=0;
for(let i=0; i<arr.length; i++){
    if(i>0 && arr[i]===arr[i-1]+1){
        count++
    }
    else{
        count=1
    }
    max=Math.max(max, count)
}
console.log(max);


