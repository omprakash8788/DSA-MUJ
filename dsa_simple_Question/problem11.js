/*
  Identical Twins

  For an array of integers "nums", an identical twin is defined as pair (i,j) where nums[i]
  is equal to nums[j] and i<j.
  
  Given an array nums, find the number of identical twins.

  Input = [5,1,2,3,2,1],
  Output = 2

  Input = [6,1,2,2,3,2,1]
  Output = 4

  Input = [4,1,1,1,1]
  Output = 6

*/

let count = 0;
let arr = [5,1,2,3,2,1];
for (let i = 0; i < arr.length; i++) {
  for (let j = i + 1; j < arr.length; j++) {
    if (arr[i] === arr[j]) {
      count++;
    }
  }
}
console.log(count);
