// Exercise 1: Basic Promise
// Description
// In this exercise, we will create a simple promise that resolves after 2 seconds. This example will help you understand the basic structure and usage of promises in JavaScript.

// Create a new Promise
const myPromise = new Promise((resolve, reject) => {
    // Simulate an asynchronous operation using setTimeout
    setTimeout(() => {
        resolve('Promise resolved after 2 seconds');
    }, 2000);
});

// Consume the promise using .then() method
myPromise.then((message) => {
    console.log(message);
});

/*
 Explanation
Step-by-Step Explanation of How the Promise Works
Creating the Promise:
new Promise((resolve, reject) => { … }): This line creates a new promise. A promise takes a function as an argument, which itself has two parameters: resolve and reject. These are callbacks provided by JavaScript.

setTimeout(() => { … }, 2000): Inside the promise, we use setTimeout to simulate an asynchronous operation. setTimeout is a built-in JavaScript function that executes a function after a specified delay (in milliseconds). In this case, it's set to 2000 milliseconds (2 seconds).

resolve(‘Promise resolved after 2 seconds’): After the 2-second delay, we call the resolve function. This changes the state of the promise from "pending" to "fulfilled" and passes the message 'Promise resolved after 2 seconds' to the promise's result.

2. Consuming the Promise:
myPromise.then((message) => { … }): The then method is used to specify what should happen when the promise is fulfilled. It takes a callback function as an argument, which receives the result passed from the resolve function.

console.log(message): Inside the then method, we log the message to the console. When the promise resolves after 2 seconds, the message 'Promise resolved after 2 seconds' will be printed.


Understanding the Flow
When the promise is created, it starts in the “pending” state.
After 2 seconds, the resolve function is called, changing the promise state to "fulfilled" and passing the provided message.
The then method is called with the fulfilled value, logging the message to the console.

*/