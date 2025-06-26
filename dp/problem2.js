/*
  Tribonacci Numbers


  The tribonacci series is a generalization of the Fibonacci sequence where each term is the sum of the three preceding terms.

a(n) = a(n-1) + a(n-2) + a(n-3)
with
a(0) = a(1) = 0, a(2) = 1.

First few numbers in the Tribonacci Sequence are 0, 0, 1, 1, 2, 4, 7, 13, 24, 44, 81, 149, 274, 504, ....

Given a value n, task is to print first n Tribonacci Numbers. 
Examples:  

Input : 5
Output : 0, 0, 1, 1, 2

Input : 10
Output : 0, 0, 1, 1, 2, 4, 7, 13, 24, 44

Input : 20
Output : 0, 0, 1, 1, 2, 4, 7, 13, 24, 44, 81, 149, 274, 504, 927, 1705, 3136,  5768, 10609, 19513


*/

function printTribonacci(n) {
    const tribonacci = [];

    // Base cases
    if (n >= 1) tribonacci.push(0);
    if (n >= 2) tribonacci.push(0);
    if (n >= 3) tribonacci.push(1);

    // Generate the rest of the sequence
    for (let i = 3; i < n; i++) {
        tribonacci[i] = tribonacci[i - 1] + tribonacci[i - 2] + tribonacci[i - 3];
    }

    console.log(tribonacci.join(", "));
}

// Example:
printTribonacci(5);  // Output: 0, 0, 1, 1, 2
