/*
 Remove occurences

Given an array and a number k, remove all occurrences of k from the array (in-place). Return the number of elements 'remainingSize' left after removing k. Note that removing the occurences is mandatory and will be checked in the main method. There can be anything beyond the first 'remainingSize' elements. It will be ignored.

Example
Array: [1, 4, 2, 6, 2, 6, 9, 4]
Number: 4
Answer: 6
Explanation:[1, 2, 6, 2, 6, 9]


*/

// function removeOccurrences(arr, k) {
//     let write = 0; // pointer to write the next valid element
  
//     for (let read = 0; read < arr.length; read++) {
//       if (arr[read] !== k) {
//         arr[write] = arr[read];
//         write++;
//       }
//     }
  
//     return write; // this is the remaining size after removing k
//   }
  
//   // Example
//   let arr = [1, 4, 2, 6, 2, 6, 9, 4];
//   let k = 4;
  
//   let remainingSize = removeOccurrences(arr, k);
//   console.log("Remaining Size:", remainingSize);     // Output: 6
//   console.log("Modified Array:", arr.slice(0, remainingSize)); // Output: [1, 2, 6, 2, 6, 9]
  

let arr=[1, 4, 2, 6, 2, 6, 9, 4];
let k=4;
let j=0;
for(let i=0; i<arr.length; i++){
   if(arr[i]!==k){
    arr[j]=arr[i];
    j++
   }
}
console.log(j)