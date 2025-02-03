// A subprocedure or void function in JavaScript.
// In JavaScript, a subprocedure (also known as a void function) performs an operation without returning a value.
function curve(arr, amount) {
  for (var i = 0; i < arr.length; ++i) {
    arr[i] += amount;
  }
}
var grades = [77, 73, 74, 81, 90];
curve(grades, 5);
console.log(grades);



// Expected output- [ 82, 78, 79, 86, 95 ]
