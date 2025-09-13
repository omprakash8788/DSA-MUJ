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

// function display() {
//   var a = (b = 10);
// }
// display();
// console.log("a", typeof a === "undefined");

// function display() {
//   var a = (b = 10);
//   console.log("line 4", a);
// }
// display();
// console.log("b", typeof b === "undefined");

// let arr = [0, 1, 2, 0, 1, 2];
// let zero = [];
// let one = [];
// let two = [];

// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] === 0) {
//     zero.push(arr[i]);   // ✅ correct usage
//   } else if (arr[i] === 1) {
//     one.push(arr[i]);    // ✅
//   } else {
//     two.push(arr[i]);    // ✅
//   }
// }

// let result = [...zero, ...one, ...two];
// console.log(result); 
// 👉 [0, 0, 1, 1, 2, 2]


// Shallow Copy
// A shallow copy occurs when you copy the reference of an object to a new variable. In this process, only the top-level properties are copied, while nested objects or arrays still reference the original memory location. This means that if you change the nested properties in one object, those changes will reflect in the other because they share the same memory reference.

// How Shallow Copy Works
// When you assign one object to another using the assignment operator (=), a shallow copy is created:

// let employee = {
//     eid: "E102",
//     ename: "Jack",
//     eaddress: "New York",
//     salary: 50000,
//     class:{
//         test:"js"
//     }
// }

// console.log("Employee=> ", employee);
// let newEmployee = employee;    // Shallow copy
// console.log("New Employee=> ", newEmployee);

// console.log("---------After modification----------");



// newEmployee.ename ="Beck";
// newEmployee.class.test="Node.js"
// console.log("Employee=> ", employee);
// console.log("New Employee=> ", newEmployee);
// // Name of the employee as well as 
// // newEmployee is changed.


// let employee = {
//     eid: "E102",
//     ename: "Jack",
//     eaddress: "New York",
//     salary: 50000,
//     class:{
//         test:"js"
//     }
// }

// console.log(employee)

// // 
// const copyObj=employee;
// copyObj.eid='RRR'
// console.log(copyObj)


let  s = "successes"
 let countv={}
    let countC={};
    for(let i=0; i<s.length; i++){
        if(s[i] =="a" || s[i]=="e" || s[i]=="i" || s[i]=="o" || s[i]=="u"){
          if(countv[s[i]]==undefined){
            countv[s[i]]=1
          }
          else{
            countv[s[i]]++
          }
        }else{
            if(countC[s[i]]==undefined){
               countC[s[i]]=1;  
            }else{
                   countC[s[i]]++ 
            }
        }
    }
    // let maxv=0;
     let maxFreq = 0;
    let mostFrequentElement = null;

    for (const element in countv) {
      if (countv[element] > maxFreq) {
        maxFreq = countv[element];
        // mostFrequentElement = element;
      }
    }

    let maxC=0
    for(const ele in countC){
        if(countC[ele] >maxC ){
            maxC=countC[ele]
        }
    }

  let sum= maxFreq + maxC;  
  console.log(sum)  