
//Q. 
let a = {};
let b = { key: "b" }; 
let c = { key: "c" };

a[b] = 123;
a[c] = 456;

console.log(a[b]);
// Explaination 
// What's Happening Behind the Scenes
// In JavaScript, when you use an object as a key in another object (like a[b]), JavaScript automatically converts the object key to a string.

// So:
// a[b] = 123; is interpreted as: a[b.toString()] = 123;
// Similarly: a[c] = 456; // becomes a[c.toString()] = 456;

//  What is b.toString()?
// By default, toString() of any object returns: "[object Object]"

// So both b and c become the same key:
// a["[object Object]"] = 123;
// a["[object Object]"] = 456;

// The second one overwrites the first.


// Final Result
// So the a object ends up like this:

// {
//   "[object Object]": 456
// }

// Therefore: console.log(a[b]); // => 456

