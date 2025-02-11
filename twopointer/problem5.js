/*
 Sum of Even and Odd Indexed Elements Separately
Problem Statement:
Using two pointers, calculate the sum of elements at even indices and the sum of elements at odd indices separately.
Input: [3, 7, 2, 8, 4]  
Output: Even-index sum = 9 (3 + 2 + 4), Odd-index sum = 15 (7 + 8)  

*/
let arr=[3, 7, 2, 8, 4];
let evenSum = 0, oddSum = 0;
    
    for (let i = 0; i < arr.length; i++) {
        if (i % 2 === 0) {
            evenSum += arr[i]; // Sum of elements at even indices
        } else {
            oddSum += arr[i];  // Sum of elements at odd indices
        }
    }

    // return { evenSum, oddSum };
    console.log(evenSum, oddSum);
    