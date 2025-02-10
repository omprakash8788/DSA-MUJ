/*
 Summing Elements in a Zig-Zag Order:
 Use two pointers—one at the start and one at the end—and sum elements alternately.
 Input: [1, 2, 3, 4, 5]  
Output: 6 + 5 + 3 = 14 (1+5, 2+4, 3)

*/
let arr=[1, 2, 3, 4, 5];
let left = 0, right = arr.length - 1;
    let sum = 0;

    while (left <= right) {
        if (left === right) {
            sum += arr[left]; // If both pointers meet, add only once
        } else {
            sum += arr[left] + arr[right]; // Add opposite elements
        }
        left++;
        right--;
    }
    
    // return sum;
    console.log(sum);
    