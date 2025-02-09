/*
  Given two arrays a[] and b[], the task is to find the count of common elements in both the given arrays. Note that both the arrays contain distinct (individually) positive integers
   
  let n=3
  Input: a[] = {1, 2, 3}, b[] = {2, 4, 3} 
   Output: 2 
   2 and 3 are common to both the arrays.

*/

let arr1=[1,2,3]
let arr2=[2,4,3]
let n=3
let l=0;
let r=n-1;
let count=0
while(l<n && r>=0){
    if(arr2[r]==arr1[l]){
        count++
        l++;
        r--;

    }
    else if(arr1[l]<arr2[r]){
        l++;

    }
    else{
        r--
    }
}
console.log(count);
