// Shallow Copy
// A shallow copy occurs when you copy the reference of an object to a new variable. In this process, only the top-level properties are copied, while nested objects or arrays still reference the original memory location. This means that if you change the nested properties in one object, those changes will reflect in the other because they share the same memory reference.

// How Shallow Copy Works
// When you assign one object to another using the assignment operator (=), a shallow copy is created:

let employee = {
    eid: "E102",
    ename: "Jack",
    eaddress: "New York",
    salary: 50000,
    class:{
        test:"js"
    }
}

console.log("Employee=> ", employee);
let newEmployee = employee;    // Shallow copy
console.log("New Employee=> ", newEmployee);

console.log("---------After modification----------");



newEmployee.ename ="Beck";
newEmployee.class.test="Node.js"
console.log("Employee=> ", employee);
console.log("New Employee=> ", newEmployee);
// Name of the employee as well as 
// newEmployee is changed.