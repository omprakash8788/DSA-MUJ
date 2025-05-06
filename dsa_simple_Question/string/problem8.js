/*
  Substring Search - II

  Given two strings s1 and s2, find the index of the first occurrence of s2 in s1 as a substring.
If no such occurence exists, return -1.

This problem is also known as finding needle in a haystack.
Use the Rabin-Karp algorithm to solve this problem.

Example 1
s1: “helloworld”
s2: “low”
Answer: 3

Example 2
s1: “workattech”
s2: “technology”
Answer: -1

*/

function rabinKarpEasy(s1, s2) {
    const n = s1.length;
    const m = s2.length;
    if (m > n) return -1;
  
    const base = 31;
    const mod = 1e9 + 7;
  
    // Helper: create hash
    function createHash(str) {
      let hash = 0;
      for (let i = 0; i < str.length; i++) {
        hash = (hash * base + str.charCodeAt(i)) % mod;
      }
      return hash;
    }
  
    const targetHash = createHash(s2);
  
    for (let i = 0; i <= n - m; i++) {
      const window = s1.substring(i, i + m);
      const windowHash = createHash(window);
  
      if (windowHash === targetHash && window === s2) {
        return i;
      }
    }
  
    return -1;
  }
  
  // Test cases
  console.log(rabinKarpEasy("helloworld", "low"));      // Output: 3
  console.log(rabinKarpEasy("workattech", "technology")); // Output: -1
  
