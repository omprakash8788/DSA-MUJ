/**
 Q. Print Arrays in horizontal
 You are given an array, whose size is store in a variable of size N. The array is store in a variable with the name, arr
 Input 
 N=5;
 arr=[1,2,3,4,5]
 output:-1,2,3,4,5
 
 */

let n = 5;
let arr = [1, 2, 3, 4, 5];
let newArr = "";
for (let i = 0; i < n; i++) {
  newArr = newArr + arr[i] + " ";
}
console.log(newArr);
