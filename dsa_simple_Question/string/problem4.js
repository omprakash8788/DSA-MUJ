/*
 Integer to Roman Numeral

 Given an integer num, convert it to a roman numeral.

Roman numerals are denoted by a combination of some symbols.


Value	Symbol
1	I
5	V
10	X
50	L
100	C
500	D
1000	M
Example 1
num: 10

Result: “X”

Example 2
s: 6

Result: “VI”

Example 3
s: 12

Result: “XII”
*/

function intToRoman(num) {
    const valueMap = [
      { value: 1000, symbol: 'M' },
      { value: 900,  symbol: 'CM' },
      { value: 500,  symbol: 'D' },
      { value: 400,  symbol: 'CD' },
      { value: 100,  symbol: 'C' },
      { value: 90,   symbol: 'XC' },
      { value: 50,   symbol: 'L' },
      { value: 40,   symbol: 'XL' },
      { value: 10,   symbol: 'X' },
      { value: 9,    symbol: 'IX' },
      { value: 5,    symbol: 'V' },
      { value: 4,    symbol: 'IV' },
      { value: 1,    symbol: 'I' }
    ];
  
    let result = '';
  
    for (let i = 0; i < valueMap.length; i++) {
      while (num >= valueMap[i].value) {
        result += valueMap[i].symbol;
        num -= valueMap[i].value;
      }
    }
  
    return result;
  }
  
  // Examples
  console.log(intToRoman(10));  // Output: "X"
  console.log(intToRoman(6));   // Output: "VI"
  console.log(intToRoman(12));  // Output: "XII"
  