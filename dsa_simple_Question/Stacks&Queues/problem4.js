/*
  Check for Balanced Parentheses ,using stack
Input: "{[()]}"
Output: "Balanced"

Input: "{[(])}"
Output: "Not Balanced"
*/

function isBalanced(str) {
    let stack = [];
  
    for (let i = 0; i < str.length; i++) {
      let ch = str[i];
  
      if (ch === '(' || ch === '{' || ch === '[') {
        stack.push(ch);
      } else if (ch === ')' || ch === '}' || ch === ']') {
        if (stack.length === 0) return "Not Balanced";
  
        let last = stack.pop();
  
        if (
          (ch === ')' && last !== '(') ||
          (ch === '}' && last !== '{') ||
          (ch === ']' && last !== '[')
        ) {
          return "Not Balanced";
        }
      }
    }
  
    // Last me stack empty hona chahiye
    return stack.length === 0 ? "Balanced" : "Not Balanced";
  }
  
  // Example use
  console.log(isBalanced("{[()]}"));   // Output: Balanced
  console.log(isBalanced("{[(])}"));   // Output: Not Balanced
  