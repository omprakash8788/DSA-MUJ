/*
 Sum of Every Pair of Elements (From Opposite Ends)
Problem Statement:
Use two pointers to sum pairs of elements from opposite ends of the array and return an array of sums.

Input: [2, 4, 6, 8, 10]  
Output: [12, 12, 6]  (2+10, 4+8, 6)  

*/
let arr=[2, 4, 6, 8, 10]  
let left = 0, right = arr.length - 1;
let result = [];

while (left <= right) {
    if (left === right) {
        result.push(arr[left]); // Add middle element if only one remains
    } else {
        result.push(arr[left] + arr[right]); // Sum pairs from opposite ends
    }
    left++;
    right--;
}

// return result;
console.log(result);
