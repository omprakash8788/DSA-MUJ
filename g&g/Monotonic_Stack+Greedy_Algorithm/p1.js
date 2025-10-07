// Remove K Digits

// Given string num representing a non-negative integer num, and an integer k, return the smallest possible integer after removing k digits from num.

// Example 1:

// Input: num = "1432219", k = 3
// Output: "1219"
// Explanation: Remove the three digits 4, 3, and 2 to form the new number 1219 which is the smallest.
// Example 2:

// Input: num = "10200", k = 1
// Output: "200"
// Explanation: Remove the leading 1 and the number is 200. Note that the output must not contain leading zeroes.
// Example 3:

// Input: num = "10", k = 2
// Output: "0"
// Explanation: Remove all the digits from the number and it is left with nothing which is 0.

let num = "1432219", k = 3;
var removeKdigits = function(num, k) {
    let stack = [];

    for (let digit of num) {
        // console.log(digit)
        // Remove larger digits from stack if we can
        while (k > 0 && stack.length && stack[stack.length - 1] > digit) {
            stack.pop();
            k--;
        }
        stack.push(digit);
    }

    // If still k digits remain, remove from the end
    while (k > 0) {
        stack.pop();
        k--;
    }

    // Remove leading zeros
    while (stack.length > 0 && stack[0] === '0') {
        stack.shift();
    }

    // If empty return "0"
    return stack.length ? stack.join('') : "0";
};

console.log(removeKdigits(num, k)); // "1219"
// console.log(removeKdigits("10200", 1));   // "200"
// console.log(removeKdigits("10", 2));      // "0"

