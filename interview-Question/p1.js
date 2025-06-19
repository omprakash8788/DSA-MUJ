function display() {
  var a = (b = 10); // function scope
  // b =10; // global variable(Note - if you not using var, let, cont, then those variable become global)
   console.log("a line 4",a) // 10;
}
display();
// console.log(a); // Reference error, a is not defined, it means undefined , then undefined === undefined, become true.
console.log("a", typeof a === "undefined");

// Ans is true 
//Why  - because 'a' is functional scope , so in this case you will access with in functional scope , but if you try to access from outer side you will get reference error.
// 