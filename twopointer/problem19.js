/*
 Find the Maximum Water Trapped (Two Pointer - Trapping Rainwater Problem)
Problem Statement:
Given an array height[] where each element represents the height of a bar, find the maximum amount of water that can be trapped between the bars after rainfall.

You must solve this using the two-pointer approach.
 Input: height = [4,2,0,3,2,5]  
Output: 9  

*/

function trap(height) {
    let left = 0, right = height.length - 1;
    let leftMax = 0, rightMax = 0;
    let trappedWater = 0;

    while (left < right) {
        if (height[left] < height[right]) {
            if (height[left] >= leftMax) {
                leftMax = height[left];
            } else {
                trappedWater += leftMax - height[left];
            }
            left++;
        } else {
            if (height[right] >= rightMax) {
                rightMax = height[right];
            } else {
                trappedWater += rightMax - height[right];
            }
            right--;
        }
    }

    return trappedWater;
}

// Test cases
console.log(trap([0,1,0,2,1,0,1,3,2,1,2,1])); // Output: 6
console.log(trap([4,2,0,3,2,5])); // Output: 9
console.log(trap([1,1,1,1,1])); // Output: 0
console.log(trap([3,0,2,0,4])); // Output: 7
console.log(trap([2,0,2])); // Output: 2
