// Array Reverse

// Reverse an array arr[]. Reversing an array means rearranging the elements such that the first element becomes the last, the second element becomes second last and so on.

// Examples:

// Input: arr[] = [1, 4, 3, 2, 6, 5]  
// Output:  [5, 6, 2, 3, 4, 1]
// Explanation: The first element 1 moves to last position, the second element 4 moves to second-last and so on.

// Input: arr[] = [4, 5, 1, 2]
// Output: [2, 1, 5, 4]
// Explanation: The first element 4 moves to last position, the second element 5 moves to second last and so on.


function reverseArray(arr) { 
    let n = arr.length;
    
    // Temporary array to store elements 
    // in reversed order
    let temp = [];
  
    // Copy elements from original array
    // to temp in reverse order
    for (let i = 0; i < n; i++)
        temp[i] = arr[n - i - 1];
  
    // Copy elements back to original array
    for (let i = 0; i < n; i++)
        arr[i] = temp[i];
}

// Driver Code 
const arr = [1, 4, 3, 2, 6, 5];

reverseArray(arr);
console.log(arr.join(" "));


// Optimation 
// function reverseArray(arr) {
    
//     // Initialize left to the beginning 
//     // and right to the end
//     let left = 0, right = arr.length - 1;
  
//     // Iterate till left is less than right
//     while (left < right) {
        
//         // Swap the elements at left 
//         // and right position
//         [arr[left], arr[right]] = [arr[right], arr[left]];
      
//         // Increment the left pointer
//         left++;
      
//         // Decrement the right pointer
//         right--;
//     }
// }

// //Driver Code 
// const arr = [1, 4, 3, 2, 6, 5];
// reverseArray(arr);
// console.log(arr.join(" "));
