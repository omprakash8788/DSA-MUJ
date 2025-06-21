let num = 0;

function test() {
  var num = 1;
  return num;
}

console.log(test()); // 1
console.log(num); // 0