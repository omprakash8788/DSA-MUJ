// Subarray Sum Equals K

// Given an array of integers nums and an integer k, return the total number of subarrays whose sum equals to k.

// A subarray is a contiguous non-empty sequence of elements within an array.

 

// Example 1:

// Input: nums = [1,1,1], k = 2
// Output: 2
// Example 2:

// Input: nums = [1,2,3], k = 3
// Output: 2


let nums = [1,1,1], k = 2;

let countSubArr=0;
for(let i=0; i<nums.length; i++){
    let sum=0;
    for(let j=i; j<nums.length; j++){
        sum=sum+nums[j]
        if(sum==k){
            countSubArr++
        }
    }
    // console.log(sum)
}
console.log(countSubArr)

/*
     let countSubarr=0
     for(let i=0; i<nums.length; i++){
         let sum=0
        for(let j=i; j<nums.length; j++){
            sum=sum+nums[j]
           if(sum==k){
            countSubarr++
           }
        }
     }
     return countSubarr;
*/
