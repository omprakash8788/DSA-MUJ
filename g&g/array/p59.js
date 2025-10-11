// Maximum Product Subarray

// Given an integer array nums, find a subarray that has the largest product, and return the product.

// The test cases are generated so that the answer will fit in a 32-bit integer.

// Example 1:

// Input: nums = [2,3,-2,4]
// Output: 6
// Explanation: [2,3] has the largest product 6.
// Example 2:

// Input: nums = [-2,0,-1]
// Output: 0
// Explanation: The result cannot be 2, because [-2,-1] is not a subarray.

let nums = [2, 3, -2, 4];
var maxProduct = function (nums) {
  // Approch 1 - only 103 test case were pass.
  //   let currentP=nums[0];
  //   let max=nums[0];
  //   for(let i=1; i<nums.length; i++){
  //     currentP= Math.max(nums[i], currentP * nums[i]);
  //     max=Math.max(max, currentP)
  //   }
  //   return max;

  // second approch - All test case pass;
  let maxProd = nums[0];
  let minProd = nums[0];
  let result = nums[0];

  for (let i = 1; i < nums.length; i++) {
    const current = nums[i];

    // store previous max before updating
    const tempMax = maxProd;

    // calculate new max and min
    maxProd = Math.max(current, current * maxProd, current * minProd);
    minProd = Math.min(current, current * tempMax, current * minProd);

    result = Math.max(result, maxProd);
  }

  return result;
};
console.log(maxProduct(nums))
