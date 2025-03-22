/*
 Defuse Bomb
Problem Statement
You have a bomb to defuse, and your time is running out! Your informer will provide you with a circular array code of length n and a key k.

To decrypt the code, you must replace every number. All the numbers are replaced simultaneously.

If k > 0, replace the ith number with the sum of the next k numbers.
If k < 0, replace the ith number with the sum of the previous k numbers.
If k == 0, replace the ith number with 0.
As code is circular, the next element of code[n-1] is code[0], and the previous element of code[0] is code[n-1].

Given the circular array code and an integer key k, return the decrypted code to defuse the bomb!

Example Inputs
Example 1:
Input: code = [5,7,1,4], k = 3
Output: [12,10,16,13]
Explanation: Each number is replaced by the sum of the next 3 numbers. The decrypted code is [7+1+4, 1+4+5, 4+5+7, 5+7+1]. Notice that the numbers wrap around.

Example 2:
Input: code = [1,2,3,4], k = 0
Output: [0,0,0,0]
Explanation: When k is zero, the numbers are replaced by 0.

Example 3:
Input: code = [2,4,9,3], k = -2
Output: [12,5,6,13]
Explanation: The decrypted code is [3+9, 2+3, 4+2, 9+4]. Notice that the numbers wrap around again. If k is negative, the sum is of the previous numbers.

Constraints
n == code.length
1 <= n <= 100
1 <= code[i] <= 100
-(n - 1) <= k <= n - 1
Brute Force Approach
a. Approach
The brute force approach involves calculating the sum of the k numbers before or after each element, depending on whether k is positive or negative.

b. Steps
Initialize an empty array result of the same length as code.
For each element at index i, calculate the sum of the next k elements if k > 0, or the previous k elements if k < 0, considering circular indexing.
If k == 0, set result[i] to 0.
Return the result array.
c. Time & Space Complexity
Time Complexity: O(n * |k|)
Space Complexity: O(n)



function decrypt(code, k) {
    const n = code.length;
    const result = new Array(n).fill(0);

    for (let i = 0; i < n; i++) {
        if (k > 0) {
            for (let j = 1; j <= k; j++) {
                result[i] += code[(i + j) % n];
            }
        } else if (k < 0) {
            for (let j = 1; j <= -k; j++) {
                result[i] += code[(i - j + n) % n];
            }
        }
    }
    
    return result;
}
const code = [5,7,1,4];
const k = 3;
console.log(decrypt(code, k));  // Output: [12, 10, 16, 13]

*/


/*
  Efficient Approach (Sliding Window)
a. Approach
Using a sliding window, we can calculate the sum for the first k elements of the circular array and reuse this sum by adding the new element coming into the window and subtracting the element going out.

b. Steps
If k == 0, return an array of zeros.
Initialize a variable windowSum to calculate the sum for the first k elements for i=0.
Slide this window along the array, updating windowSum for each new position.
Fill the result array with the updated windowSum values.
c. Time & Space Complexity
Time Complexity: O(n)
Space Complexity: O(n)


*/

// function decrypt(code, k) {
//     const n = code.length;
//     if (k === 0) return Array(n).fill(0);

//     const result = new Array(n).fill(0);
//     const absK = Math.abs(k);
    
//     let windowSum = 0;
//     for (let i = 0; i < absK; i++) {
//         windowSum += code[i];
//     }
    
//     for (let i = 0; i < n; i++) {
//         windowSum += code[(i + absK) % n];
//         result[i] = windowSum;
//         windowSum -= code[i];
//     }
    
//     return result;
// }
// const code = [5,7,1,4];
// const k = 3;
// console.log(decrypt(code, k));  // Output: [12, 10, 16, 13]


function decrypt(code, k) {
    const n = code.length;

    if (k === 0) return Array(n).fill(0);

    const result = new Array(n).fill(0);

    for (let i = 0; i < n; i++) {
        let sum = 0;

        if (k > 0) {
            // Sum next k elements
            for (let j = 1; j <= k; j++) {
                sum += code[(i + j) % n]; // Circular indexing
            }
        } else {
            // Sum previous |k| elements
            for (let j = 1; j <= Math.abs(k); j++) {
                sum += code[(i - j + n) % n]; // Circular indexing (handles negatives)
            }
        }

        result[i] = sum;
    }

    return result;
}

const code = [5, 7, 1, 4];
const k = 3;
console.log(decrypt(code, k)); // Output: [12, 10, 16, 13]
