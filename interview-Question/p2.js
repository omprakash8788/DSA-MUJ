function display() {
  var a = (b = 10); // function scope
  // b =10; // global variable(Note - if you not using var, let, cont, then those variable become global)
 console.log("line 4",a) // 10
}
display();
console.log("line 7", b)
// console.log(a); // RE- not defined 
console.log("b", typeof b === "undefined"); // 10===undefined == false.
// number==="undefined" , false 

// Why
// if you decealre any variable without these key 'let', 'const', 'var', then those part become global, exp , b=6.
