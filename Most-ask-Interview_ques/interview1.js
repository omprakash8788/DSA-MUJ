// Q1.
// Which of the following prints first?
setTimeout(() => {
console.log('setTimeout wins');
},0);
queueMicrotask(() => {
console.log('queueMicrotask wins');
});

