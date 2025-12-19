/*
 Q. Count vowel and consonent.
 You have to find the count of vowels and consonent in the string and print it.
 Input: 
 str="India"
 N=5;
 Expected Output: consonets=3, vowels=2
 */
let str = "India";
let N = 5;
let vowel = 0;
let consonent = 0;
for (let i = 0; i < str.length; i++) {
  if (
    str[i] == "a" ||
    str[i] == "e" ||
    str[i] == "i" ||
    str[i] == "o" ||
    str[i] == "u"
  ) {
    vowel++;
  } else {
    consonent++;
  }
}
console.log("Total vowel is:", vowel, "Total consonent is:", consonent);
