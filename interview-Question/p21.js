let obj = { name: "John", age: 25 };
let newObj = { ...obj, age: 30 };
//  console.log(newObj)

console.log(obj.age); // 25
console.log(newObj.age); // 30