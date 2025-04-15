/*
Merge Two Sorted Arrays

Given two sorted arrays A and B, find the merged sorted array C by merging A and B.

Example:
A: [1, 2, 3, 4, 4]
B: [2, 4, 5, 5]
C: [1, 2, 2, 3, 4, 4, 4, 5, 5]

*/

function mergeSortedArrays(A, B) {
    let i = 0, j = 0;
    const C = [];
  
    // Traverse both arrays
    while (i < A.length && j < B.length) {
      if (A[i] <= B[j]) {
        C.push(A[i]);
        i++;
      } else {
        C.push(B[j]);
        j++;
      }
    }
  
    // Add remaining elements from A
    while (i < A.length) {
      C.push(A[i]);
      i++;
    }
  
    // Add remaining elements from B
    while (j < B.length) {
      C.push(B[j]);
      j++;
    }
  
    return C;
  }
  
  // Example usage:
  const A = [1, 2, 3, 4, 4];
  const B = [2, 4, 5, 5];
  const C = mergeSortedArrays(A, B);
  console.log(C); // Output: [1, 2, 2, 3, 4, 4, 4, 5, 5]
  