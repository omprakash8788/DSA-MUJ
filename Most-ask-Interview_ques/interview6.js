// What does the below code output to the console and why?
console.log(11 & 3);

/*
 The answer is D.  & is a bitwise operator (very different from &&).  11 & 3
is the same as (in binary) 1011 & 0011.  Only bits that are both 1 are kept at
1, so the output is 0011, which is the binary representation of 3.

*/