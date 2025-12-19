/*
 Given an array of integers 'k' and a positive integer , determine the number of (i,j)  pairs where 'i<j'  and arr[i]  + arr[j]   is divisible by k.

 Example 

n = 6, k = 3
let arr=[1, 3, 2 ,6, 1, 2]
Expected output = 5

*/
let k = 3;
let arr = [1, 3, 2, 6, 1, 2];
let newArr = 0;
for (let i = 0; i < arr.length; i++) {
  for (let j = i + 1; j < arr.length; j++) {
    if ((arr[i] + arr[j]) % k == 0)  {
      newArr++;
    }
  }
}
console.log(newArr);
