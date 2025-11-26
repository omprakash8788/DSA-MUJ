/*
 Negative numbers in sorted array
 
 Given a sorted array of integers, find the number of negative numbers.

 Expected Time Complexity: O(log n)

Examples
Array: [-5, -3, -2, 3, 4, 6, 7, 8]
Answer: 3
Array: [0, 1, 2, 3, 4, 6, 7, 8]
Answer: 0

*/
// let arr =  [-5, -3, -2, 3, 4, 6, 7, 8]
// let count =0;
// for(let i=0; i<arr.length; i++){
//     if(arr[i]<0){
//         count++
//     }
// }
// console.log(count)

function countNegatives(arr) {
    let low = 0;
    let high = arr.length - 1;
    let firstNonNegative = arr.length;

    while (low <= high) {
        let mid = Math.floor((low + high) / 2);

        if (arr[mid] < 0) {
            low = mid + 1; // move right
        } else {
            firstNonNegative = mid; // possible answer, move left to find earlier non-negative
            high = mid - 1;
        }
    }

    return firstNonNegative; // count of negative numbers
}

let arr1 = [-5, -3, -2, 3, 4, 6, 7, 8];
let arr2 = [0, 1, 2, 3, 4, 6, 7, 8];

console.log(countNegatives(arr1)); // 3
console.log(countNegatives(arr2)); // 0
