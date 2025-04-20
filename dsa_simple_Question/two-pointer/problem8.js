/*
 Kth element of two sorted lists

 Given two sorted arrays A and B, and another value k, print the kth element of the resultant sorted array.

Example
A: [1, 2, 3, 4, 5, 6]
B: [3, 4, 4, 5, 6, 6]
Result: [1, 2, 3, 3, 4, 4, 4, 5, 5, 6, 6, 6]
3rd element in the array is 3.
6th element in the array is 4.
*/

function kthElement(A, B, k) {
    const merged = [];
    let i = 0;
    let j = 0;
  
    // Merge both arrays manually
    while (i < A.length && j < B.length) {
      if (A[i] < B[j]) {
        merged.push(A[i]);
        i++;
      } else {
        merged.push(B[j]);
        j++;
      }
    }
  
    // Add remaining elements from A
    while (i < A.length) {
      merged.push(A[i]);
      i++;
    }
  
    // Add remaining elements from B
    while (j < B.length) {
      merged.push(B[j]);
      j++;
    }
  
    // Return the kth element (1-based indexing)
    return merged[k - 1];
  }
  
  // Example usage:
  const A = [1, 2, 3, 4, 5, 6];
  const B = [3, 4, 4, 5, 6, 6];
  
  console.log(kthElement(A, B, 3)); // ➜ 3
  console.log(kthElement(A, B, 6)); // ➜ 4
  