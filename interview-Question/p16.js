let a = {
  x: 1, // 5
  y: 2,
};
let b = a; 
// console.log(a==b)

//  b = {
//   x: 1,
//   y: 2,
// };

a.x = 5;
console.log(a);  
console.log(b);

// Output 
// { x: 5, y: 2 }
// { x: 5, y: 2 }