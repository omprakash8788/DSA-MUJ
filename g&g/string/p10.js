// Count Primes

// Given an integer n, return the number of prime numbers that are strictly less than n.

 

// Example 1:

// Input: n = 10
// Output: 4
// Explanation: There are 4 prime numbers less than 10, they are 2, 3, 5, 7.
// Example 2:

// Input: n = 0
// Output: 0
// Example 3:

// Input: n = 1
// Output: 0
let n=10;
var countPrimes = function(n) {
    if (n <= 2) return 0; // No primes less than 2

    // Create a boolean array "isPrime" of size n, initially all true
    const isPrime = new Array(n).fill(true);
    isPrime[0] = false;
    isPrime[1] = false;

    for (let i = 2; i * i < n; i++) {
        if (isPrime[i]) {
            // Mark all multiples of i as non-prime
            for (let j = i * i; j < n; j += i) {
                isPrime[j] = false;
            }
        }
    }

    // Count primes
    let count = 0;
    for (let i = 2; i < n; i++) {
        if (isPrime[i]) count++;
    }

    return count;
};
console.log(countPrimes(n))