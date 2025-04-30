/*
  Roman Numeral to Integer

  Given a roman numeral s, convert it to an integer.

Roman numerals are denoted by a combination of some symbols.


Symbol	Value
I	1
V	5
X	10
L	50
C	100
D	500
M	1000


Example 1
s: “X”

Result: 10

Example 2
s: “VI”

Result: 6

Example 3
s: “XII”

Result: 12
*/


function romanToInt(s) {
    const romanMap = {
      'I': 1,
      'V': 5,
      'X': 10,
      'L': 50,
      'C': 100,
      'D': 500,
      'M': 1000
    };
  
    let result = 0;
  
    for (let i = 0; i < s.length; i++) {
      const currentVal = romanMap[s[i]];
      const nextVal = romanMap[s[i + 1]];
  
      // If the next value is larger, subtract current (e.g., IV = 5 - 1 = 4)
      if (nextVal > currentVal) {
        result -= currentVal;
      } else {
        result += currentVal;
      }
    }
  
    return result;
  }
  
  // Examples
  console.log(romanToInt("X"));    // Output: 10
  console.log(romanToInt("VI"));   // Output: 6
  console.log(romanToInt("XII"));  // Output: 12
  