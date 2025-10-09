// Check if Number Has Equal Digit Count and Digit Value

// You are given a 0-indexed string num of length n consisting of digits.

// Return true if for every index i in the range 0 <= i < n, the digit i occurs num[i] times in num, otherwise return false.

// Example 1:

// Input: num = "1210"
// Output: true
// Explanation:
// num[0] = '1'. The digit 0 occurs once in num.
// num[1] = '2'. The digit 1 occurs twice in num.
// num[2] = '1'. The digit 2 occurs once in num.
// num[3] = '0'. The digit 3 occurs zero times in num.
// The condition holds true for every index in "1210", so return true.
// Example 2:

// Input: num = "030"
// Output: false
// Explanation:
// num[0] = '0'. The digit 0 should occur zero times, but actually occurs twice in num.
// num[1] = '3'. The digit 1 should occur three times, but actually occurs zero times in num.
// num[2] = '0'. The digit 2 occurs zero times in num.
// The indices 0 and 1 both violate the condition, so return false.
 
let num = "1210";
   let obj={};
for(let i=0; i<num.length; i++){
    if(obj[num[i]]==undefined){
        obj[num[i]]=1;
    }
    else{
        obj[num[i]]++
    }
}
// console.log(obj)
let isValid = true;

for (let i = 0; i < num.length; i++) {
  let count = obj[i] || 0; // if digit doesn't exist, count is 0
//   console.log(count)
  if (parseInt(num[i]) !== count) {
    isValid = false;
    break;
  }
}
console.log(isValid)
// return isValid;