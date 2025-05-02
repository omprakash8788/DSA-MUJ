/*
 Anagrams

 Given two strings A and B, find whether A and B are anagrams of each other or not.

 Example 1
A: ”abcd”

B: “dabc”

A & B are anagrams.

Example 2
A: “workattech”

B: “worktattch”

A & B are not anagrams.

*/

function areAnagrams(A, B) {
    if (A.length !== B.length) return false;
  
    const freq = {};
  
    // Count characters in string A
    for (let i = 0; i < A.length; i++) {
      let char = A[i];
      if (freq[char] === undefined) {
        freq[char] = 1;
      } else {
        freq[char]++;
      }
    }
  
    // Decrease count based on string B
    for (let i = 0; i < B.length; i++) {
      let char = B[i];
      if (freq[char] === undefined || freq[char] === 0) {
        return false; // char not found or used more times than in A
      }
      freq[char]--;
    }
  
    return true;
  }
  
  // Examples
  console.log(areAnagrams("abcd", "dabc"));         // true
  console.log(areAnagrams("workattech", "worktattch")); // false
  