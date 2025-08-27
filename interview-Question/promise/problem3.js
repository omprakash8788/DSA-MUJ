// Exercise 3: Handling Errors
// Description
// In this exercise, we will demonstrate how to handle errors in promises. Proper error handling is crucial in asynchronous programming to ensure that issues are caught and managed gracefully.


// Create a promise that simulates an error
const errorPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject('An error occurred');
    }, 1000);
});

// Handle the error using .catch() method
errorPromise
    .then((message) => {
        console.log(message); // This won't be executed
    })
    .catch((error) => {
        console.error('Error caught:', error); // Log the error message
    });
    
// Another way to handle errors using .then() second parameter
errorPromise
    .then((message) => {
        console.log(message); // This won't be executed
    }, (error) => {
        console.error('Error caught using then second parameter:', error); // Log the error message
    });