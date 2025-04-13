
// function main(){
//     function sayRegularHello(){
//         console.log("Regular Hello", this)
//     }
//     sayRegularHello();

//     var sayArrrowHello=()=>{
//         console.log("Arrow Hello", this)
//     };
//     sayArrrowHello();

// }
// main.call({name:"op"})

// console.log(null || 2 && 3 || 4)

// function scopeTest(){
//     var student_name = "Rohit";

//     if(true){
//         student_name="Krishna"
//     }
//     console.log(student_name)
// }

// scopeTest()


// function sayName(){
//     console.log('Name: ', myVar);

//     function sayAge(){
//         myVar = 12;
//         console.log("Age: ", myVar)
//     }
//     sayAge();
// }

// var myVar="Vivek"
// sayName();


let obj1={name:"vivek"}
let obj2=obj1;
let obj3=obj2;
obj3.name="ramji"
obj3.age=5
console.log(obj3);

