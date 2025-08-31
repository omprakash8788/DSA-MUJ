// Move all negative elements to end

// Given an unsorted array arr[ ] having both negative and positive integers. The task is to place all negative elements at the end of the array without changing the order of positive elements and negative elements.

// Note: Don't return any array, just in-place on the array.

// Examples:

// Input : arr[] = [1, -1, 3, 2, -7, -5, 11, 6 ]
// Output : [1, 3, 2, 11, 6, -1, -7, -5]
// Explanation: By doing operations we separated the integers without changing the order.

// Input : arr[] = [-5, 7, -3, -4, 9, 10, -1, 11]
// Output : [7, 9, 10, 11, -5, -3, -4, -1]
let arr = [1, -1, 3, 2, -7, -5, 11, 6];
let n = arr.length;

// Traverse the array from the front
for (let i = 0; i < n; i++) {
  // If current element is negative, remove it and push to end
  if (arr[i] < 0) {
    let temp = arr[i];
    arr.splice(i, 1); // Remove from current position
    arr.push(temp); // Push to end
    i--; // Adjust index after removal
    n--; // Reduce length for iteration to avoid infinite loop
  }
}
console.log(arr);
