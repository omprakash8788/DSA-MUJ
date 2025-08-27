// Exercise 2: Chaining Promises

// Description
// In this exercise, we will chain multiple promises together. Chaining promises allows you to execute a sequence of asynchronous operations in a specific order, where each operation depends on the result of the previous one.

// Create the first promise
const firstPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("First promise resolved");
  }, 1000);
});

// Chain the second promise
const secondPromise = firstPromise.then((message) => {
  console.log(message); // Log the message from the first promise
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Second promise resolved");
    }, 1000);
  });
});

// Chain the third promise
secondPromise
  .then((message) => {
    console.log(message); // Log the message from the second promise
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("Third promise resolved");
      }, 1000);
    });
  })
  .then((message) => {
    console.log(message); // Log the message from the third promise
  });

/*
 Explanation
Detailed Breakdown of Chaining Process
Creating the First Promise:
This is similar to the basic promise example from Exercise 1. We create a new promise that resolves after 1 second with the message 'First promise resolved'.

2. Chaining the Second Promise:

firstPromise.then((message) => { … }): We use the then method to chain another promise to firstPromise. The callback function receives the message from the first promise.

console.log(message): We log the message from the first promise to the console.
return new Promise((resolve, reject) => { … }): Inside the callback, we return a new promise that resolves after another 1 second with the message 'Second promise resolved'. This returned promise becomes secondPromise.


3. Chaining the Third Promise:

secondPromise.then((message) => { … }): We chain another promise to secondPromise. The callback function receives the message from the second promise.

console.log(message): We log the message from the second promise to the console.

return new Promise((resolve, reject) => { … }): Inside the callback, we return a third promise that resolves after another 1 second with the message 'Third promise resolved'.

.then((message) => { console.log(message); }): Finally, we chain another then method to handle the result of the third promise and log its message to the console.



Understanding the Flow
The first promise resolves after 1 second and logs its message.
The second promise is chained to the first one, and it starts after the first promise resolves. It logs the first message and resolves after another 1 second with a new message.


The third promise is chained to the second one, and it starts after the second promise resolves. It logs the second message and resolves after another 1 second with a final message.

Each promise waits for the previous one to complete before it starts, creating a sequence of asynchronous operations.

Why This is Useful
Chaining promises is essential for scenarios where multiple asynchronous operations need to be executed in a specific order. By chaining promises, you ensure that each operation starts only after the previous one completes, maintaining a clear and logical flow in your code. This method is much cleaner and easier to manage compared to nesting multiple callbacks, leading to more readable and maintainable code.

This exercise demonstrates the power and flexibility of promises in JavaScript, allowing you to handle complex asynchronous workflows with ease.


*/
