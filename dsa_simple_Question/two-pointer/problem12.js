/*
 k-Substring Vowels

 Given a string s and a number k, find the number of vowels in every substring of size k.

Vowels: ['a', 'e', 'i', 'o', 'u']

Example
String: "workattech"
k: 3
Here, the substrings of size k and their vowel counts are:
wor => 1
ork => 1
rka => 1
kat => 1
att => 1
tte => 1
tec => 1
ech => 1
Answer: [1, 1, 1, 1, 1, 1, 1, 1]
String: "substring"
k: 2
Here, the substrings of size k and their vowel counts are:
su => 1
ub => 1
bs => 0
st => 0
tr => 0
ri => 1
in => 1
ng => 0
Answer: [1, 1, 0, 0, 0, 1, 1, 0]

*/

function isVowel(char) {
  return (
    char === "a" || char === "e" || char === "i" || char === "o" || char === "u"
  );
}

function kSubstringVowels(s, k) {
  let result = [];
  let count = 0;

  // Count vowels in the first window
  for (let i = 0; i < k; i++) {
    if (isVowel(s[i])) count++;
  }
  result.push(count);

  // Slide the window across the string
  for (let i = k; i < s.length; i++) {
    if (isVowel(s[i - k])) count--; // remove leftmost
    if (isVowel(s[i])) count++; // add new rightmost
    result.push(count);
  }

  return result;
}

// Example usage:
let str = "workattech";
let k = 3;
console.log(kSubstringVowels(str, k)); // ➜ [1, 1, 1, 1, 1, 1, 1, 1]
