// Example of priority in action:
// Q1.
function test(){
    console.log("func")
}
test();
console.log('Synchronous 1');

Promise.resolve().then(() => {
  console.log('Promise Microtask');
});

setTimeout(() => {
  console.log('setTimeout Macrotask');
}, 0);

console.log('Synchronous 2');

// What happend here --->  We know JS is single thread langauge - it will read code line by line 

// Output, func, Synchronous 1, Synchronous 2, Promise Microtask', setTimeout Macrotask

// Priority- base on this code, function ---> then sync --->  Promise ---> SetTimeout.
