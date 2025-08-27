// Exercise 4: Promise.all
// Description
// In this exercise, we will use Promise.all to run multiple promises in parallel. This method is useful when you need to wait for several asynchronous operations to complete before proceeding.

// Create three promises that resolve after different times
const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('First promise resolved after 1 second');
    }, 1000);
});

const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Second promise resolved after 2 seconds');
    }, 2000);
});

const promise3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Third promise resolved after 3 seconds');
    }, 3000);
});

// Use Promise.all to run the promises in parallel
Promise.all([promise1, promise2, promise3])
    .then((messages) => {
        console.log('All promises resolved:');
        messages.forEach((message, index) => {
            console.log(`Promise ${index + 1}: ${message}`);
        });
    })
    .catch((error) => {
        console.error('One of the promises rejected:', error);
    });