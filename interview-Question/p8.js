let obj1 = { key: "value" };
let obj2 = obj1; // {key: "value" }
let obj3 = obj2;   // {key: "value" }

// obj1 ={key:"new value"};
obj1.key = "new value"; 
obj2 = { key: "another value" }; 

console.log(obj1.key, obj2.key, obj3.key);
// new value, another value, new value
