/*
 Problem Statement
Given a sorted array of integers, find if a pair of elements exists that sum up to a given target value.

Sample Test Case
Input
Array: [1, 2, 4, 7, 11, 15]
Target: 9
Output
true

*/

// function findPairBruteForce(arr, target) {
//     for (let i = 0; i < arr.length; i++) {
//         for (let j = i + 1; j < arr.length; j++) {
//             if (arr[i] + arr[j] === target) {
//                 return true;
//             }
//         }
//     }
//     return false;
// }

// const arr = [1, 2, 4, 7, 11, 15];
// const target = 9;
// console.log(findPairBruteForce(arr, target));


function findPairTwoPointer(arr, target) {
    let low = 0;
    let high = arr.length - 1;

    while (low < high) {
        const sum = arr[low] + arr[high];
        if (sum === target) {
            return true;
        } else if (sum < target) {
            low++;
        } else {
            high--;
        }
    }
    return false;
}

const arr = [1, 2, 4, 7, 11, 15];
const target = 9;
console.log(findPairTwoPointer(arr, target));