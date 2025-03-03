/*
  Given an Integer n, find the reverse of its digits.

Examples:  

Input: n = 12345 
Output: 54321
Explanation: The output “54321” for the input num = 12345 represents the number reversed from its original order.  

*/

let num = 4562;

function reverseDigits(n) {
    let revNum = 0;
    while(n > 0)
    {
        revNum = revNum * 10 + n % 10;
        n = Math.floor(n / 10);
    }
    return revNum;
}

// function call   
console.log(reverseDigits(num));
