// 347. Top K Frequent Elements

// Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order.

// Example 1:

// Input: nums = [1,1,1,2,2,3], k = 2

// Output: [1,2]

// Example 2:

// Input: nums = [1], k = 1

// Output: [1]

// Example 3:

// Input: nums = [1,2,1,2,1,2,3,1,3,2], k = 2

// Output: [1,2]

let nums = [1, 1, 1, 2, 2, 3],
  k = 2;
let obj = {};
for (let i = 0; i < nums.length; i++) {
  if (obj[nums[i]] == undefined) {
    obj[nums[i]] = 1;
  } else {
    obj[nums[i]]++;
  }
}

// console.log(obj)
//  Sort by frequency (descending)
let sort = Object.entries(obj).sort((a, b) => b[1] - a[1]);
//console.log(sort); // [ [ '1', 3 ], [ '2', 2 ], [ '3', 1 ] ]

//  Take top k elements
let result = sort.slice(0, k).map((item) => Number(item[0]));
console.log(result); // [1, 2]
//  return result;
