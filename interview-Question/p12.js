const arr = [1, 2, 3, 4, 5];

for (var i = 0; i < arr.length; i++) {
    //1 
  setTimeout(function () {
    console.log(i);
    
  }, 1000);
}

// ❓ What's the Output?
// After 1 second, it logs:
// 5
// 5
// 5
// 5
// 5

// ❓ Why?
// Because var is function-scoped, not block-scoped.
// So by the time the setTimeout functions run after 1 second, the loop has already finished, and i is 5.

// All the console.log(i) functions share the same i, which now equals 5.