// Palindrome String

// You are given a string s. Your task is to determine if the string is a palindrome. A string is considered a palindrome if it reads the same forwards and backwards.


// Examples :

// Input: s = "abba"
// Output: true
// Explanation: "abba" reads the same forwards and backwards, so it is a palindrome.


// Input: s = "abc" 
// Output: false
// Explanation: "abc" does not read the same forwards and backwards, so it is not a palindrome.


let s = "abba";

let string = "";
for (let i = s.length-1; i >= 0; i--) {
  string = string + s[i];
}
// console.log(string)
if (string === s) {
  console.log("true");
} else {
  console.log("false");
}
