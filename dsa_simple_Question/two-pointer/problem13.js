/*
 Maximum k-Substring Vowels

 Given a string s and a number k, find the maximum number of vowels in any substring of size k.

Vowels: ['a', 'e', 'i', 'o', 'u']


Example
String: "workaattech"
k: 3
Here, the substrings of size k and their vowel counts are:
wor => 1
ork => 1
rka => 1
kaa => 2
aat => 2
att => 1
tte => 1
tec => 1
ech => 1
Answer: 2
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
Answer: 1
*/


function isVowel(ch) {
    return ch === 'a' || ch === 'e' || ch === 'i' || ch === 'o' || ch === 'u';
  }
  
  function maxKSubstringVowels(s, k) {
    let maxCount = 0;
    let currentCount = 0;
  
    // Count vowels in the first window
    for (let i = 0; i < k; i++) {
      if (isVowel(s[i])) {
        currentCount++;
      }
    }
    maxCount = currentCount;
  
    // Slide the window
    for (let i = k; i < s.length; i++) {
      if (isVowel(s[i - k])) {
        currentCount--; // remove leftmost
      }
      if (isVowel(s[i])) {
        currentCount++; // add new rightmost
      }
      if (currentCount > maxCount) {
        maxCount = currentCount;
      }
    }
  
    return maxCount;
  }
  
  // Example usage:
  let str1 = "workaattech";
  let k1 = 3;
  console.log(maxKSubstringVowels(str1, k1)); // ➜ 2
  
  let str2 = "substring";
  let k2 = 2;
  console.log(maxKSubstringVowels(str2, k2)); // ➜ 1
  