/*
Substring under condition.
Your task is to find the count of all such substring. Which start and ends with same character.

Example 
let str="bcdbc"
Expected output=7
*/


str="bcdbc";
let count=0;
for(let i=0; i<str.length; i++){
    for(let j=i; j<str.length; j++){
        if(str[i]==str[j]){
            count++
        }
    }
}
console.log(count);
