


/*
 Nth Fibonacci Number
 Given a positive integer n, the task is to find the nth Fibonacci number.
The Fibonacci sequence is a sequence where the next term is the sum of the previous two terms. The first two terms of the Fibonacci sequence are 0 followed by 1. The Fibonacci sequence: 0, 1, 1, 2, 3, 5, 8, 13, 21
Example:
Input: n = 2
Output: 1 
Explanation: 1 is the 2nd number of Fibonacci series.
Input: n = 5
Output: 5
Explanation: 5 is the 5th number of Fibonacci series.
*/
// function nthFibonacci(n){

//     // Base case: if n is 0 or 1, return n
//     if (n <= 1) {
//         return n;
//     }
    
//     // Recursive case: sum of the two preceding Fibonacci
//     // numbers
//     return nthFibonacci(n - 1) + nthFibonacci(n - 2);
// }

// let n = 5;
// let result = nthFibonacci(n);
// console.log(result);


function nthFibonacci(n) {
    if (n <= 1) return n;

    let a = 0, b = 1;
    for (let i = 2; i <= n; i++) {
        let temp = a + b;
        a = b;
        b = temp;
    }
    return b;
}
let n = 5;
let result = nthFibonacci(n);
console.log(result);


