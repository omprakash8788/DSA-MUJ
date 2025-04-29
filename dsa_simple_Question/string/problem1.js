
/*
 Reverse Words in String

Given a string s, reverse the order of words.

A word is a sequence of non-space characters. Words in the string s will have one space between them. There are no leading or trailing spaces.

Example
s: “yoda is a jedi”

Reversed s: “jedi a is yoda”

*/

function reverseWords(s) {
    let words = [];  // array to store words
    let word = '';
  
    // Step 1: Extract words
    for (let i = 0; i < s.length; i++) {
      if (s[i] !== ' ') {
        word += s[i];
      } else {
        words.push(word);
        word = '';
      }
    }
    // push the last word
    words.push(word);
  
    // Step 2: Build result in reverse
    let result = '';
    for (let i = words.length - 1; i >= 0; i--) {
      result += words[i];
      if (i !== 0) {
        result += ' ';
      }
    }
  
    return result;
  }
  
  // Example usage:
  const s = "yoda is a jedi";
  console.log(reverseWords(s)); // Output: "jedi a is yoda"
  