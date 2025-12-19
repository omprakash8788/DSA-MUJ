// Check Whether a String is Palindrome or Not
/*
 Print YES, if the string is a palindrome, else print NO.
 Input , let str="mam", n=3


Explaination.
A string is a palindrome if it is read the same from forward or backward. For example, dad reads the same either from forward or backward. So the word dad is a palindrome. Similarly, madam is also a palindrome.

*/

let str = "mam";
let n = 3;
let newstr = "";
for (let i = n - 1; i >= 0; i--) {
  newstr = newstr + str[i];
}
if (newstr === str) {
  console.log("Yes");
} else {
  console.log("No");
}
