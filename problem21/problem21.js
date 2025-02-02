/*
Remove upper case.
Write a JavaScript program to remove all uppercase letters from a given string.
let str = "InDia";
Expected output = nia

*/
let str = "InDia";
let newStr="";
let char="abcdefghijklmnopqrstuvwxyz"

for(let i=0; i<str.length; i++){
    for(let j=0; j<char.length; j++){
        if(str[i]==char[j]){
            newStr=newStr+str[i]
        }
    }
}
console.log(newStr);

