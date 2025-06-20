// What is Throttling?
// Throttling is a technique that limits how often a function can be called in a given period of time. It is useful for improving the performance and responsiveness of web pages that have event listeners that trigger heavy or expensive operations, such as animations, scrolling, resizing, fetching data, etc.

// For example, if you have a function that fetches some data from an API every time the user scrolls the page, you might want to throttle it so that it only makes one request every second, instead of making hundreds of requests as the user scrolls. This way, you can avoid overloading the server or the browser with unnecessary requests and reduce the bandwidth consumption.


function throttle(mainFunction, delay) {
  let timerFlag = null; // Variable to keep track of the timer

  // Returning a throttled version 
  return (...args) => {
    if (timerFlag === null) { // If there is no timer currently running
      mainFunction(...args); // Execute the main function 
      timerFlag = setTimeout(() => { // Set a timer to clear the timerFlag after the specified delay
        timerFlag = null; // Clear the timerFlag to allow the main function to be executed again
      }, delay);
    }
  };
}

// Use Case

// Define a function that fetches some data from an API
function fetchData() {
  console.log("Fetching data...");
  // Simulate an API call with a random delay
  setTimeout(() => {
    console.log("Data fetched!");
  }, Math.random() * 1000);
}

// Throttle the fetchData function with a delay of 5000 ms
const throttledFetchData = throttle(fetchData, 5000);

// Add an event listener to the window scroll event that calls the throttledFetchData function
window.addEventListener("scroll", throttledFetchData);