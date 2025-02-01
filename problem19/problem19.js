/*
Given an array of strings nums containing n unique binary strings each of length n, return a binary string of length n that does not appear in nums. If there are multiple answers, you may return any of them.

 

Example 1:

Input: nums = ["001", "100"]

Output: "101"

*/
let nums = ["001", "100"];
let temp = "";
//  console.log(nums[0].length);

for (let i = 0; i < nums[0].length; i++) {
  // Perform bitwise OR operation column-wise
  if (nums[0][i] === "1" || nums[1][i] === "1") {
    temp += "1";
  } else {
    temp += "0";
  }
}

console.log(temp); // Output: "101"
