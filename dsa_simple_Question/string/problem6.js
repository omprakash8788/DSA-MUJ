/*
 Longest Common Prefix

 Given a list of strings A, find the longest common prefix among all the strings.

 What is the Longest Common Prefix?
Given a list of strings, we are asked to find the longest starting substring that is common in all strings.

Example
A: [“abc”, “abef”, “abccc”, “abftg”]

Longest common prefix: “ab”

*/
function longestCommonPrefix(A) {
    if (A.length === 0) return "";
  
    // Take the first string as reference
    let prefix = "";
  
    for (let i = 0; i < A[0].length; i++) {
      let char = A[0][i];
  
      // Check this character in all other strings
      for (let j = 1; j < A.length; j++) {
        if (i >= A[j].length || A[j][i] !== char) {
          return prefix; // mismatch found
        }
      }
  
      // If all matched, add to prefix
      prefix += char;
    }
  
    return prefix;
  }
  
  // Example usage
  const arr = ["abc", "abef", "abccc", "abftg"];
  console.log(longestCommonPrefix(arr)); // Output: "ab"
  