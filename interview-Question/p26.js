// Js, Priority base execution
// Microtasks and Macrotasks:

// Microtasks (Higher Priority): These tasks are executed immediately after the current script or function completes, but before the event loop moves to the next macrotask. Examples include:
// Promise callbacks (.then(), .catch(), .finally())


// Macrotasks (Lower Priority): These tasks are processed one at a time, and only after all available microtasks have been executed. Examples include:
// setTimeout() callbacks
// setInterval() callbacks
// DOM events (e.g., click, load)

// Execution Order:
// Synchronous code in the call stack executes first.
// Once the call stack is empty, all pending microtasks are executed.
// After microtasks are cleared, the event loop picks one macrotask from its queue and executes it.
// This cycle repeats: synchronous code, then all microtasks, then one macrotask, and so on.

// Example of priority in action:
// Q1.
// console.log('Synchronous 1');

// Promise.resolve().then(() => {
//   console.log('Promise Microtask');
// });

// setTimeout(() => {
//   console.log('setTimeout Macrotask');
// }, 0);

// console.log('Synchronous 2');

// Do more reserach and experiment, dont sleep.
// Output 
// Synchronous 1
// Synchronous 2'
// Promise Microtask
// setTimeout Macrotask

// Q2. 
// setTimeout(()=>{
//     console.log("4")
// },500)

// setTimeout(()=>{
//     console.log("3")
// })
// console.log("1")

// output
// 1
// 3
// 4


// Q3. 
// setTimeout(()=>{
//     console.log("4")
// })

// setTimeout(()=>{
//     console.log("3")
// })
// console.log("1")

// 1
// 4
// 3



// Q. Sync, microtask, microtask, 
// console.log("1")

// Promise.resolve().then(()=>{
//     console.log("2")
// })

// Promise.resolve().then(()=>{
//     console.log("3")
// })

// Output
// 1
// 2
// 3


// Q
// console.log("1")

// Promise.resolve().then(()=>{
//     console.log("2")
// })

// Promise.resolve().then(()=>{
//     console.log("3")
// })

// function hello(){
//     console.log("4")
// }
// hello()


// 1, 4, 2, 3


console.log("1")

Promise.resolve().then(()=>{
    console.log("2")
})

Promise.resolve().then(()=>{
    console.log("3")
})

function hello(){
    console.log("4")
}
hello()

function hello1(){
    console.log("5")
}
hello1()
//1, 4, 5, 2, 3

// let myInterval = setInterval(hello, 2000);
