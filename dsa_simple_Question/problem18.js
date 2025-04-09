/*
 Kth Largest Element

 Given a list of numbers below:
4, 3, 6, 4, 1

What is the largest element in the list? → 6

What is the 3rd largest element in the list? → 4

Given a list of numbers, find the kth largest element in the list.

A simple solution is to sort the array and get the kth largest element. The best sorting algorithms have an average case time complexity of O(n log n).

Try to solve this problem with an average time complexity of O(n).


*/

/*
  Easy way 
  nums.sort((a, b) => b - a);
  return nums[k - 1]; 
*/

function findKthLargest(nums, k) {
    let largest = 0;
  
    for (let i = 0; i < k; i++) {
      // Step 1: Assume the first number is the biggest
      largest = nums[0];
      let index = 0;
  
      // Step 2: Find the biggest number in the array
      for (let j = 1; j < nums.length; j++) {
        if (nums[j] > largest) {
          largest = nums[j];
          index = j;
        }
      }
      
      // Step 3: Remove the biggest number we just found
      nums.splice(index, 1);
    }
  
    // Step 4: After k loops, 'largest' is the kth biggest
    return largest;
  }
  console.log(findKthLargest([3, 2, 1, 5, 6, 4], 2)); // Output: 5
  