/*
  Imagine two algorithms that solve the same problem, but one takes seconds while the other takes hours as the input size grows. Time complexity allows us to predict this behavior and choose the more efficient algorithm.

  Consider two different ways to sum the first n natural numbers:


  function sumOfFirstNNumbers(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i;
    }
    return sum;
}


function sumOfFirstNNumbers(n) {
    return (n * (n + 1)) / 2;
}


Comparing Time Complexities
Algorithm	Time Complexity	Description
Loop	O(n)	Grows linearly with n
Formula	O(1)	Always takes constant time


*/