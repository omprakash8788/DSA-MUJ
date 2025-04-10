/*
 Question: Inversion Count (Reverse Order Version)
Problem Statement:
Inversion count of an array represents how far the array is from being sorted.
In this variation, we define an inversion as a pair of indices (i, j) such that:

i > j and A[i] < A[j]

In other words, you're counting how many times a smaller element appears after a bigger element in the array — i.e., the array is "less sorted" in reverse direction.

🧾 Input:
An integer n — the number of elements in the array.

An array A of n integers.

🧾 Output:
Print a single integer — the inversion count based on the condition:
A[i] < A[j] and i > j


✅ Example:
Input:

5
1 1 2 2 3


Output:

0
*/

function countInversions(arr) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < i; j++) {
        if (arr[i] < arr[j]) {
          count++;
        }
      }
    }
    return count;
  }
  
  let arr = [1, 1, 2, 2, 3];
  console.log("Inversion Count:", countInversions(arr));
  