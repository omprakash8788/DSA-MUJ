let x = 1;

if (function f() {}) {
  x += typeof f;
}

console.log(x); // 1undefined

// Answer - 1undefined
// The if statement is evaluating the function f as a boolean value. In JavaScript, functions are truthy values, so the condition will evaluate to true and the code block inside the if statement will be executed. The value of x is then incremented by the string "undefined", which is the result of calling typeof f.