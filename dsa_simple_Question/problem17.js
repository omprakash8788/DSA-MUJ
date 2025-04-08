/*
 Primes upto N

 Given a number, let’s say 10. Can you tell all the divisors of the number?

For 10, there are 4 divisors (1, 2, 5 & 10).
Let’s take 5, it has 2 divisors (1 & 5).

A Prime number is a number that has exactly two divisors → 1 and itself.
Note: 1 is not a prime number.

Given a number, find all the prime numbers from 1 to that number.
let n=7;
*/

function primesUptoN(n) {
    let primes = [];
  
    for (let i = 2; i <= n; i++) {
      let count = 0;
  
      for (let j = 1; j <= i; j++) {
        if (i % j === 0) {
          count++;
        }
      }
  
      if (count === 2) {
        primes.push(i);
      }
    }
  
    return primes;
  }
  
  // Example
  console.log(primesUptoN(20)); 
  // Output: [2, 3, 5, 7, 11, 13, 17, 19]
  