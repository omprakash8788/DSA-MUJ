/* Write a function createCounter. It should accept an initial integer init. It should return an object with three functions.

The six functions are:

increment() increases the current value by 1 and then returns it.
decrement() reduces the current value by 1 and then returns it.
reset() sets the current value to init and then returns it.
incremnent2() increases the current value by 2 and then returns it.
decrement2() reduces the current value by 2 and then returns it.
reset2() sets the current value to init and then returns it.

Example 1:

Input: init = 5, calls = ["increment","reset","decrement"]
Output: [6,5,4]
Explanation:
// Example usage:
const counter = createCounter(5);

console.log(counter.increment());  // 6
console.log(counter.reset());      // 5
console.log(counter.decrement());  // 4
console.log(counter.increment2()); // 6
console.log(counter.decrement2()); // 4
console.log(counter.reset2());     // 5

*/

function createCounter(init) {
  let currentValue = init;

  return {
    increment: function () {
      currentValue += 1;
      return currentValue;
    },
    decrement: function () {
      currentValue -= 1;
      return currentValue;
    },
    reset: function () {
      currentValue = init;
      return currentValue;
    },
    increment2: function () {
      currentValue = currentValue + 2;
      return currentValue;
    },
    decrement2: function () {
      currentValue = currentValue - 2;
      return currentValue;
    },
    reset2: function () {
      currentValue = init;
      return currentValue;
    },
  };
}

// Example usage:
const counter = createCounter(5);

console.log(counter.increment()); // 6
console.log(counter.reset()); // 5
console.log(counter.decrement()); // 4
console.log(counter.increment2()); // 6
console.log(counter.decrement2()); // 4
console.log(counter.reset2()); // 5
