// 9. Write a function that checks if a given string is a palindrome.

let str ="mam";
let newS="";
for(let i=str.length-1; i>=0; i--){
    newS = newS + str[i]
}
if(str == newS){
    console.log("It is Panlindrome")
}else{
    console.log("Not Panlindrome")
}