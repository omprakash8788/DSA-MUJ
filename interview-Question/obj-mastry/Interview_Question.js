// real interview-style mock test (10 nested state manipulation questions) ready kar diya hai.
// Tu ek ek karke solve kare, main check karke sahi karaunga

// Mock Test: Nested State Manipulation (JS/React/Redux level)

//Q1. 
const state1 = { user: { name: "Om", age: 24 } };
// Age ko 25 karo bina original mutate kiye.


//Q2
const state2 = { profile: { details: { name: "Om", city: "Delhi" } } };
// City ko "Mumbai" karo.

//Q3
const state3 = { cart: { items: [ { id: 1, qty: 1 }, { id: 2, qty: 3 } ] } };
// id=2 ka qty 5 karo.

//Q4
const state4 = { library: { books: [ { id: 1, author: { name: "Kyle" } } ] } };
// id=1 ke author ka name "Omprakash" karo.

//Q5
const state5 = { settings: { theme: { mode: "light", font: "small" } } };
// Mode "dark" aur font "large" karo.

//Q6
const state6 = { todos: [ { id: 1, task: "Learn JS", done: false }, { id: 2, task: "Learn React", done: false } ] };
// id=2 ka done true karo.

//Q7
const state7 = { company: { employees: [ { id: 1, info: { name: "Om", role: "Dev" } } ] } };
// id=1 ka role "Senior Dev" karo.

//Q8
const state8 = { orders: [ { id: 101, products: [ { name: "Phone", qty: 1 } ] } ] };
// id=101 ke products[0] ka qty 2 karo.

//Q9.
const state9 = { game: { players: [ { id: 1, stats: { score: 10 } } ] } };
// id=1 ka score 50 karo.

//Q10
const state = { classroom: { students: [ { id: 1, marks: { math: 80, science: 70 } } ] } };
// id=1 ka science 90 karo.








