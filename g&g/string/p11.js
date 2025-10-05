// Sum of Two Integers

// Given two integers a and b, return the sum of the two integers without using the operators + and -.

 

// Example 1:

// Input: a = 1, b = 2
// Output: 3
// Example 2:

// Input: a = 2, b = 3
// Output: 5

let a = 1, b = 2;
    
    // if b is positive → keep increasing a and decreasing b
  while (b > 0) {
    a++;
    b--;
  }

  // if b is negative → keep decreasing a and increasing b
  while (b < 0) {
    a--;
    b++;
  }

  console.log(a)