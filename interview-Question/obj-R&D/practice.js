// Object R&D Practice Problems

// Level 1 – Basics

// Create an object car with properties brand, model, and year. Print brand using dot and model using bracket notation.

// Add a property color to car and delete year. Show final object.

// Loop through this object and print key: value format.

// const car = {
//   brand: "2023 lts",
//   model: "SUV",
//   year: " 2025",
// };
// car.color = "red";
// delete car.year;
// console.log(car);
// console.log(car.brand);
// console.log(car["model"]);

// for(let key in car){
//    console.log(key, car[key])
// }



// Ab chalte hain Level 2 – Transformations pe:

// Question 4
// Convert object {a:1, b:2, c:3} into an array of entries, then back to object.

// let object=  {a:1, b:2, c:3}
// // let objToArray = Object.entries(object)
// // console.log(objToArray)

// let entries = Object.entries(object);
// let backToObj = Object.fromEntries(entries);
// console.log(backToObj);


// Write a function that doubles all numeric values in an object.
// Input: { x: 2, y: 5 }
// Output: { x: 4, y: 10 }

let obj={ x: 2, y: 5 };
for(const num in obj){
  console.log(obj[num] * 2)
}

const testObj=Object.fromEntries(
    Object.entries(obj).map(([k,v])=>[k, v * 2])
)
console.log(testObj)
testObj();

// ⚡ Hack: Map object values
// const newObj = Object.fromEntries(
//   Object.entries(obj).map(([k,v]) => [k, v * 2])
// );
// console.log(newObj); // { a:2, b:4 }






