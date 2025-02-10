/*

 Problem Statement:
You are given an array of numbers. Your task is to find the sum of all elements in the array using the two-pointer technique.
  Input: arr = [1, 2, 3]  
Output: 6  


 */

let arr = [1, 2, 3] 

let left = 0, right = arr.length - 1;
    let sum = 0;
    
    while (left <= right) {
        if (left === right) {
            sum += arr[left]; // If both pointers meet, add the element once
        } else {
            sum += arr[left] + arr[right]; // Add both elements
        }
        left++;
        right--;
    }
    
    // return sum;
    console.log(sum);
    