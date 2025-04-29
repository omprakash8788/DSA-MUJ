/*
Longest Palindrome in String

Given a string s, find the longest palindrome substring in s.

If there are multiple valid substrings, find the first one.

Example
s: “mississippi”

Longest palindrome substring: “ississi”

*/

function longestPalindrome(s) {
    if (s.length <= 1) return s;
  
    let start = 0, maxLength = 1;
  
    function expandAroundCenter(left, right) {
      while (left >= 0 && right < s.length && s[left] === s[right]) {
        left--;
        right++;
      }
      return [left + 1, right - 1];
    }
  
    for (let i = 0; i < s.length; i++) {
      // Odd length palindromes
      let [left1, right1] = expandAroundCenter(i, i);
      if (right1 - left1 + 1 > maxLength) {
        start = left1;
        maxLength = right1 - left1 + 1;
      }
  
      // Even length palindromes
      let [left2, right2] = expandAroundCenter(i, i + 1);
      if (right2 - left2 + 1 > maxLength) {
        start = left2;
        maxLength = right2 - left2 + 1;
      }
    }
  
    return s.substring(start, start + maxLength);
  }
  
  // Example usage:
  const s = "mississippi";
  console.log(longestPalindrome(s)); // Output: "ississi"
  