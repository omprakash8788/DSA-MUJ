/*
  Substring Search - I

  Given two strings s1 and s2, find the index of the first occurrence of s2 in s1 as a substring.
If no such occurence exists, return -1.

This problem is also known as finding needle in a haystack.

Example 1
s1: “helloworld”
s2: “low”
Answer: 3
Example 2
s1: “workattech”
s2: “technology”
Answer: -1


*/

function substringSearch(s1, s2) {
    let n = s1.length;
    let m = s2.length;
  
    if (m === 0) return 0;  // edge case: empty s2 always matches at 0
  
    for (let i = 0; i <= n - m; i++) {
      let found = true;
  
      for (let j = 0; j < m; j++) {
        if (s1[i + j] !== s2[j]) {
          found = false;
          break;
        }
      }
  
      if (found) return i; // match found starting at index i
    }
  
    return -1; // no match found
  }
  
  // Test cases
  console.log(substringSearch("helloworld", "low"));      // Output: 3
  console.log(substringSearch("workattech", "technology")) // Output: -1
  