// object shallow copying using the spread operator (...)" in JavaScript.
let obj = { 
    name: "John",
     age: 25 ,
    address:{
        village:"Lakatola"
    }
};
let newObj = { ...obj, name:"om", age: 30, address:{...obj.address, village:"Mumbai"} };

//  console.log(newObj)

// console.log(obj.age); // 25
// console.log(newObj.age); // 30
console.log(obj)
console.log(newObj)