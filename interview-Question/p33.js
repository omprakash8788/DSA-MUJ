//  Update a nested property
let student = {
  name: "Rahul",
  marks: {
    math: 70,
    english: 80
  }
};

//  Create a new object where marks.math = 90.
const newObj={...student, marks:{...student.marks, math:90}}
console.log(newObj)