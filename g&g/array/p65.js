// 46. Permutations

// Given an array nums of distinct integers, return all the possible permutations. You can return the answer in any order.

 

// Example 1:

// Input: nums = [1,2,3]
// Output: [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
// Example 2:

// Input: nums = [0,1]
// Output: [[0,1],[1,0]]
// Example 3:

// Input: nums = [1]
// Output: [[1]]
let nums = [1,2,3]
// Output: [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
var permute = function(nums) {
    const result = [];

    function backtrack(path) {
        if (path.length === nums.length) {
            result.push([...path]);
            return;
        }

        for (let num of nums) {
            if (!path.includes(num)) { 
                path.push(num);
                backtrack(path);       
                path.pop();           
            }
        }
    }

    backtrack([]);
    return result;
};
console.log(permute(nums))