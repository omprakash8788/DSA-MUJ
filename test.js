
// const op={
//     name:"op",
//     number:998898877,
//     test:function(){
//        console.log(`my name is ${this.name}`)
//     },

// }
// op.test();


//Q. 
let a = {};
let b = { key: "b" };
let c = { key: "c" };

a[b] = 123;
a[c] = 456;

console.log(a[b]);