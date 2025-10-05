// Subsets

// Given an integer array nums of unique elements, return all possible subsets (the power set).

// The solution set must not contain duplicate subsets. Return the solution in any order.

 

// Example 1:

// Input: nums = [1,2,3]
// Output: [[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]
// Example 2:

// Input: nums = [0]
// Output: [[],[0]]

// --------------------------------------------------------------

let nums = [1,2,3]

   let result = [[]]; // start with empty subset
  
  for (let num of nums) {
    console.log("first loop", num)
    let newSubsets = [];
    for (let subset of result) {
    console.log("second loop", subset)
         
      newSubsets.push([...subset, num]); // add current num to each existing subset
    }
    result.push(...newSubsets);
  }
  console.log(result)
//   return result;
