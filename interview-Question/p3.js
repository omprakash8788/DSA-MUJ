function test(){
  let a=5;
  let b=a;
  let c=b;
  var d=c;
   e=6 // it become global variable - it means you can access from outer side of function.

  console.log(d, c, b, a)
}
test();
console.log(e)