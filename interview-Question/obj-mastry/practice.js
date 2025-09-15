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

// ----------------------------------------------------------

// Ab chalte hain Level 2 – Transformations pe:

// Question 4
// Convert object {a:1, b:2, c:3} into an array of entries, then back to object.

// let object=  {a:1, b:2, c:3}
// // let objToArray = Object.entries(object)
// // console.log(objToArray)

// let entries = Object.entries(object);
// let backToObj = Object.fromEntries(entries);
// console.log(backToObj);

//---------------------------------------------
// Write a function that doubles all numeric values in an object.
// Input: { x: 2, y: 5 }
// Output: { x: 4, y: 10 }

// let obj={ x: 2, y: 5 };
// for(const num in obj){
//   console.log(obj[num] * 2)
// }

// const testObj=Object.fromEntries(
//     Object.entries(obj).map(([k,v])=>[k, v * 2])
// )
// console.log(testObj)
// testObj();

// ⚡ Hack: Map object values
// const newObj = Object.fromEntries(
//   Object.entries(obj).map(([k,v]) => [k, v * 2])
// );
// console.log(newObj); // { a:2, b:4 }

// --------------------------------------------------------
// Cloning & Merging karte hain:
// Q6.
// Create a shallow copy and deep copy of:
// const obj = { x: 1, y: { z: 2 } };
// Phir y.z update karke check kar original change hota hai ya nahi.

// const shallowCopy={...obj};
// console.log(shallowCopy)

// ✅ Ye shallow copy bana diya.
// ⚠️ Lekin dikkat: shallow copy sirf top-level keys copy karta hai. Nested object (y) still reference hai.
// shallowCopy.y.z = 999;
// console.log(shallowCopy); // { x: 1, y: { z: 999 } }
// console.log(obj);         // { x: 1, y: { z: 999 } } ❌ original bhi badal gaya

//----------------------------------------

// Ab deep copy kar ke dekh:
// Old trick (JSON method):
// const obj = { x: 1, y: { z: 2 } };
// const deepCopy = JSON.parse(JSON.stringify(obj));
// console.log(deepCopy)
// deepCopy.y.z = 500;
// console.log(deepCopy); // { x: 1, y: { z: 500 } }
// console.log(obj);      // { x: 1, y: { z: 2 } } ✅ original safe hai

//-----------------------------------
// const obj = { x: 1, y: { z: 2 } };
// const deepCopy2 = structuredClone(obj);
// deepCopy2.y.z = 777;
// console.log(deepCopy2); // { x: 1, y: { z: 777 } }
// console.log(obj);       // { x: 1, y: { z: 2 } }

// --------------------------------
// Ab Q7 (Merging) try kar:
// Tere paas yeh do objects hain:
// const a = { name: "Om", age: 24 };
// const b = { age: 25, city: "Delhi" };
// // Ek naya merged object banao jisme age ki value b wali ho (latest overwrite ho).
// // Matlab final output:
// //{ name: "Om", age: 25, city: "Delhi" }

// const merObj={...a, ...b};
// console.log(merObj)

//-----------------

// const state = { user: { profile: { name: "Om", age: 24 } } };
// // Isme sirf age ko 25 karo without mutating original object.

// const update ={
//     ...state,
//     user:{
//         ...state.user,
//         profile:{
//             ...state.user.profile,
//             age:25
//         }
//     }
// }

// console.log(update, state)

// -----------------

// const state = {
//   user: {
//     profile: { name: "Om", age: 24, city: "Delhi" }
//   }
// };
// sirf city ko "Mumbai" karo

// const update ={
//     ...state,
//     user:{
//         ...state.user,
//         profile:{
//             ...state.user.profile,
//             city:"Mumbai",
//         }
//     }
// }

// console.log(update, state)

// ------------------------
// const state = { 
//   cart: { 
//     items: [ { id: 1, qty: 1 }, { id: 2, qty: 2 } ] 
//   } 
// };

// // item id=2 ka qty 5 karo
// const update = {
//   ...state,
//   cart: {
//     ...state.cart,
//     items: state.cart.items.map(item =>
//       item.id === 2 ? { ...item, qty: 5 } : item
//     )
//   }
// };

// console.log("Original:", state);
// console.log("Updated:", update);
// console.log("Original:", JSON.stringify(state, null, 2));
// console.log("Updated:", JSON.stringify(update, null, 2));


// ---------------------------------------

// const state = { 
//   settings: { 
//     theme: { mode: "light", font: "small" } 
//   } 
// };
// // mode ko "dark" aur font ko "large" karo
// const update ={
//     ...state,
//     settings:{
//         ...state.settings,
//         theme:{
//             ...state.settings.theme,
//             mode:"dark",
//             font:"large"
//         }
//     }
// }
// console.log(update, state)


// -----------------------
// const state = { 
//   company: { 
//     employees: { 
//       e1: { name: "Raj", role: "Dev" }, 
//       e2: { name: "Om", role: "Tester" } 
//     } 
//   } 
// };
// // employee e2 ka role "Manager" karo
// const update={
//     ...state,
//     company:{
//         ...state.company,
//         employees:{
//             ...state.company.employees,
//              e2:{
//             ...state.company.employees.e2,
//             role:"Manager"
//         }
//         }
     
//     }
// }
// console.log(JSON.stringify(update))


// ------------------------------------
// const state = { 
//   library: { 
//     books: [ 
//       { id: 1, title: "JS Basics", author: { name: "Kyle" } }, 
//       { id: 2, title: "React Guide", author: { name: "Om" } } 
//     ] 
//   } 
// };
// // book id=1 ke author ka name "Omprakash" karo
// const update = {
//     ...state,
//     library:{
//         ...state.library.books.map(item=>item.id===1 ? {...item, ...item.author="op"} : item)
//     }
// }
// console.log(JSON.stringify(update))


// const state = { 
//   library: { 
//     books: [ 
//       { id: 1, title: "JS Basics", author: { name: "Kyle" } }, 
//       { id: 2, title: "React Guide", author: { name: "Om" } } 
//     ] 
//   } 
// };

// // book id=1 ke author ka name "Omprakash" karo
// const update = {
//   ...state,
//   library: {
//     ...state.library,
//     books: state.library.books.map(item =>
//       item.id === 1
//         ? { 
//             ...item, 
//             author: { ...item.author, name: "Omprakash" } 
//           }
//         : item
//     )
//   }
// };

// console.log("Original:", JSON.stringify(state, null, 2));
// console.log("Updated:", JSON.stringify(update, null, 2));


// const state = { user: { name: "Om", age: 24 } };
// // Age ko 25 karo bina original mutate kiye.
// const update = {
//   ...state,
//   user:{
//     ...state.user,
//     name:"Raja ji",
//     city:"mumbai",
//     age:25
    
//   }
// }
// console.log(update, state)

// -----------------------

// 14/09/2025.

//Q1.
// const state = { user: { name: "Om", age: 24 } };
// // Age ko 25 karo bina original mutate kiye.
// const update={
//   ...state,
//   user:{
//     ...state.user,
//     age:25
//   }
// }
// console.log(update)


// Q2.
// const state = { profile: { details: { name: "Om", city: "Delhi" } } };
// // City ko "Mumbai" karo.
// const update={
//   ...state,
//   profile:{
//     ...state.profile,
//     details:{
//       ...state.profile.details,
//       city:"Mumbai"
//     }
//   }
// }
// console.log(update)
// items: state.items.map(...)

// Q3. 
// const state = { cart: { items: [ { id: 1, qty: 1 }, { id: 2, qty: 3 } ] } };
// // id=2 ka qty 5 karo.
// const update ={
//   ...state,
//   cart:{
//     ...state.cart,
//    items:state.cart.items.map(item=>item.id==2 ? {...item,qty:5 } :item)
//   }
// }
// console.log(JSON.stringify(update))

//Q4 
// const state = { library: { books: [ { id: 1, author: { name: "Kyle" } } ] } };
// // id=1 ke author ka name "Omprakash" karo.
// const update ={
//   ...state,
//   library:{
//     ...state.library,
//     books:state.library.books.map(item=>item.id==1 ? {...item, author: { ...item.author, name: "Omprakash" } }:item)
//   }
// }
// console.log(JSON.stringify(update))


// Q5
// const state = { settings: { theme: { mode: "light", font: "small" } } };
// // Mode "dark" aur font "large" karo.


// const update ={
//   ...state,
//   settings:{
//     ...state.settings,
//     theme:{
//       ...state.settings.theme,
//       mode:"dark",
//       font:"large"
//     }
//   }
// }

// console.log(update)

//Q6
// const state = { todos: [ { id: 1, task: "Learn JS", done: false }, { id: 2, task: "Learn React", done: false } ] };
// // id=2 ka done true karo.
// const update ={
//   ...state,
//   todos:state.todos.map(item=>item.id==2 ? {...item,done:true }:item)
// }
// console.log(update)

//Q7.
// const state = { company: { employees: [ { id: 1, info: { name: "Om", role: "Dev" } } ] } };
// // id=1 ka role "Senior Dev" karo.
// const update ={
//   ...state,
//   company:{
//     ...state.company,
//     employees:state.company.employees.map(item=>item.id==1 ? {...item, info:{...item.info, role:"Senior Dev"}}:item)
//   }
// }
// console.log(JSON.stringify(update))



//Q8.
// const state = { orders: [ { id: 101, products: [ { name: "Phone", qty: 1 } ] } ] };
// // id=101 ke products[0] ka qty 2 karo.
// const update ={
//   ...state,
//  orders: state.orders.map(order =>
//   order.id === 101
//     ? {
//         ...order,
//         products: order.products.map(p =>
//           p.name === "Phone" ? { ...p, qty: 2 } : p
//         )
//       }
//     : order
// )

// }
// console.log(JSON.stringify(update)) 

// Q9
// const state = { game: { players: [ { id: 1, stats: { score: 10 } } ] } };
// // id=1 ka score 50 karo.
// const update = {
//   ...state,
//   game:{
//     ...state.game,
//     players:state.game.players.map(item => item.id==1 ? {...item, stats:{...item.stats,score:50}}:item)
//   }
// }
// console.log(JSON.stringify(update))

// Q10 

// const state = { classroom: { students: [ { id: 1, marks: { math: 80, science: 70 } } ] } };
// // id=1 ka science 90 karo.
// const update ={
//   ...state,
//   classroom:{
//     ...state.classroom,
//     students:state.classroom.students.map(item=>item.id==1 ? {...item, marks:{...item.marks,science:90}}:item)
//   }
// }
// console.log(JSON.stringify(update))


//Q1. 
// const state1 = { user: { name: "Om", age: 24 } };
// // Age ko 25 karo bina original mutate kiye.
// const update ={
//   ...state1,
//   user:{
//     ...state1.user,
//     age:25
//   }
// }
// console.log(update)


//Q2
// const state2 = { profile: { details: { name: "Om", city: "Delhi" } } };
// // City ko "Mumbai" karo.
// const update ={
//   ...state2,
//   profile:{
//     ...state2.profile,
//     details:{
//       ...state2.profile.details,
//       city:"Mumbai"
//     }
//   }
// }
// console.log(update)

//Q3
// const state3 = { cart: { items: [ { id: 1, qty: 1 }, { id: 2, qty: 3 } ] } };
// // id=2 ka qty 5 karo.
// const update ={
//   ...state3,
//   cart:{
//     ...state3.cart,
//     items:state3.cart.items.map(item=>item.id==2 ? {...item, qty:5}:item)

//   }
// }
// console.log(JSON.stringify(update))

//Q4
// const state4 = { library: { books: [ { id: 1, author: { name: "Kyle" } } ] } };
// // id=1 ke author ka name "Omprakash" karo.
// const update ={
//   ...state4,
//   library:{
//     ...state4.library,
//     books:state4.library.books.map(item=> item.id==1 ? {...item, author:{...item.author, name:"omprakash"}}:item)
//   }
// }
// console.log(JSON.stringify(update))

//Q5
// const state5 = { settings: { theme: { mode: "light", font: "small" } } };
// // Mode "dark" aur font "large" karo.

// const update ={
//   ...state5,
//   settings:{
//     ...state5.settings,
//     theme:{
//       ...state5.settings.theme,
//       mode:"dark",
//       font:"large"
//     }
//   }
// }
// console.log(update)

//Q6
// const state6 = { todos: [ { id: 1, task: "Learn JS", done: false }, { id: 2, task: "Learn React", done: false } ] };
// // id=2 ka done true karo.
// const update ={
//   ...state6,
//   todos:state6.todos.map(item => item.id==2 ? {...item,done:true }:item)

// }
// console.log(update)

//Q7
// const state7 = { company: { employees: [ { id: 1, info: { name: "Om", role: "Dev" } } ] } };
// // id=1 ka role "Senior Dev" karo.

// const update ={
//   ...state7,
//   company:{
//     ...state7.company,
//     employees:state7.company.employees.map(item=>item.id==1 ? {...item, info:{...item.info, role:"Senior Dev"}}:item)
//   }
// }
// console.log(JSON.stringify(update))


//Q8
// const state8 = { orders: [ { id: 101, products: [ { name: "Phone", qty: 1 } ] } ] };
// // id=101 ke products[0] ka qty 2 karo.
// const update= {
//   ...state8,
//   orders:state8.orders.map(item=>item.id==101 ? {...item, products:item.products.map(items=>item ? item.qty:2 )} : item)
// }
// console.log(JSON.stringify(update))