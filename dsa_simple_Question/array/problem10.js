/*
Given an array of integers, write a function to compute the cumulative sum of the array. The cumulative sum at index i is the sum of all elements from index 0 to index i.

let arr=[5, 1, -2, 3, 4, -6]

Expected output :- 5, 6, 4, 7, 5
*/

function cumulativeSum(arr) {
    let result = [];
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
        result.push(sum);
    }
    return result;
}

const arr=[5, 1, -2, 3, 4, -6]
const outputArray = cumulativeSum(arr);
console.log(outputArray); 
