/*
  Given a string s, composed of different combinations of '(' , ')', '{', '}', '[', ']', verify the validity of the arrangement.
An input string is valid if:

         1. Open brackets must be closed by the same type of brackets.
         2. Open brackets must be closed in the correct order.

Examples :

Input: s = "[{()}]"
Output: true
Explanation: All the brackets are well-formed.
*/

s = "[{()}]"
let stack=[];
let len=s;
let obj={
    '(' : ')', '{': '}', '[': ']'
    
}
for(let i=0; i<len; i++){
    if(stack.length>0 && obj[stack[stack.length-1]]===s[i]){
        stack.pop();
        
    }
    else{
        stack.push(s[i])
    }
}
if(stack.length==0){
    // return true
    console.log("true");
    
}
else{
    // return false;
    console.log("false");
    
}
