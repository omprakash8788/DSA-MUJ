// Find the sequre of given element.
// function square(num) {
//   console.log(num, num * num);
// }
// var nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// nums.forEach(square);

//Write a JavaScript program to calculate the average grade for all students
// Q. Find the average of grades?.
// var grades = [
//   [89, 77, 78],
//   [76, 82, 81],
//   [91, 94, 89],
// ];
// var total = 0;
// var average = 0.0;
// for (var row = 0; row < grades.length; ++row) {
//   for (var col = 0; col < grades[row].length; ++col) {
//     total += grades[row][col];
//   }
//   average = total / grades[row].length;
//   console.log(
//     "Student " + parseInt(row + 1) + " average: " + average.toFixed(2)
//   );
//   total = 0;
//   average = 0.0;
// }


// Stack
// var s = [];
// s.push("David");
// s.push("Raymond");
// s.push("Bryan");
 
// console.log(s.pop());

// console.log(s.length, s);




//closures with Example 
function alpha() {
  let a = 24;
  function beta() {
  console.log(a);
  }
  beta();
  }
  alpha();

 //Q. How can you efficiently merge two arrays in JavaScript without using built-in methods like concat()?

// Ans: The spread operator (...) in JavaScript provides a concise way to merge two arrays by expanding their elements into a new array. This method is useful for combining multiple arrays while maintaining their order.

let numbersOne = [1, 2, 3];
let numbersTwo = [4, 5, 6];

// Expected output = [1,2,3,4,5,6]


