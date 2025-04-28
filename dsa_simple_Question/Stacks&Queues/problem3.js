/*
   Reverse a String using Stack
Input: "hello"
Output: "olleh"



*/

function reverseStr(str){
    let stack=[];

    for(let i=0; i<str.length; i++){
        stack.push(str[i])
    }

    let reverse="";
    while(stack.length > 0){
       reverse += stack.pop()
    }
    return reverse
    // console.log(stack)

}
// Example use
const input = "hello";
const output = reverseStr(input);
console.log(output)