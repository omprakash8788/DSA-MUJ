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



// let a = { x: 1 };
// let b = { x: 2 };
// let c = { x: 3 };
// let d = { x: 4 };
// let e = { x: 5 };
// let arr = [a, b, c, d, e];
// // map it with key *2 
// arr.map((value)=>(value.x=value.x*2))
// console.log(a.x, b.x, c.x, d.x, e.x)

// alert(isNaN(false))

// let nameobj= new Object();
// nameobj={
//  name:"op",
//  roll:456
// }
// console.log(nameobj)

// var o=new Object();
// console.log(o)

// var num1=5;
// var num2=num1;

// var obj1=new Object();
// var obj2=obj1;
// obj1.name="op";
// console.log(obj2.name);

// var color = "blue";
// function changeColor(){
//     var anotherColor="red";
//     function swapColors(){
//         var tempColor=anotherColor; // red 
//         anotherColor=color; // blue 

//     }
//     swapColors();
// }
// changeColor();
// 163 page pe tha...



// Interview question 

// What is the output of below code?
// const num = 1;
// 	const result = (function(num) {
// 	    delete num; // 0 
// 	    return num;  // 0 
// 	})(10);
// 	console.log(result); // 0

// What is the output of below code?
	// var num = 1;
	// let result = function () {
	// console.log(num); //1,  undefined 
	// var num = 2;
	// }
	// result();


// "What is the output of -2/4*5
// A. 2.5
// B. 0.1
// C. Nan

// console.log(-2/4*5)



function display() {
  var a = (b = 10); 
}
display();
console.log("a", typeof a === "undefined");
