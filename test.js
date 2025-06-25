// // const op={
// //     name:"op",
// //     number:998898877,
// //     test:function(){
// //        console.log(`my name is ${this.name}`)
// //     },

// // }
// // op.test();

// var a = {
//   name: "om",
//   age: 24,
//   class: {
//     rollNo: 5,
//     section: 2,
//   },
// };

// let b={...a}
// b.age=25;
// b.class.rollNo=6;
// // a.age=24;
// console.log("a", a)  // age 25
// console.log("b", b)  //

// (function () {
//   console.log(1);

//   setTimeout(() => {
//     console.log(2);
//   });
//   setTimeout(() => {
//     console.log(3);
//   }, 1000);

//   Promise.resolve().then(() => {
//     console.log(4);
//   });

//   console.log(5);
// })();

// 1
// 5
// 4
// 2
// 3

// 1
// 5
// 4
// 2
// 3 

// 1
//5
// 2
// 3
// 4

// 0, 1, 2, 3 
// for (var i = 0; i<= 3; i++) {
//  setTimeout(() => console.log(i), 1000);
// }


// var n=2;
// function square(num){
//     var ans = num * num;
//     return ans;
// }
// var square1=square(n);
// var square2=square(4);



// let obj = { 
//     name: "John",
//      age: 25 ,
//     address:{
//         village:"Lakatola"
//     }
// };

// console.log("Orginal object",obj)
// let newObj={...obj, name:"omprakash", age:"14", address:{...obj.address, village:"Siwan"}}
// console.log("Modified object",newObj)
// console.log(obj==newObj)
//now task is to modified newObj name to "Op", age:"14", viallage :"siwan"


