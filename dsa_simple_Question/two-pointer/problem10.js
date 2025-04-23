/*
 Dutch National Flag

Sort an array A where each of the elements belong to the set: {0, 1, 2}.

Expected Time Complexity: O(n)

Try to solve it without storing the count of 0s, 1s and 2s.

Example:
A: [2, 2, 0, 1]
Result: [0, 1, 2, 2]


*/

/*
 This is a classic problem called the Dutch National Flag problem. Since the array only contains 0, 1, and 2, we can solve it in O(n) time without counting — by using three pointers:

✅ Approach: Three Pointers (Low, Mid, High)
low → position to place next 0

mid → current element to check

high → position to place next 2

We loop through the array once, and swap elements accordingly.

*/

function dutchNationalFlag(A) {
    let low = 0;
    let mid = 0;
    let high = A.length - 1;
  
    while (mid <= high) {
      if (A[mid] === 0) {
        // Swap A[low] and A[mid]
        let temp = A[low];
        A[low] = A[mid];
        A[mid] = temp;
        low++;
        mid++;
      } else if (A[mid] === 1) {
        mid++;
      } else {
        // A[mid] === 2
        // Swap A[mid] and A[high]
        let temp = A[mid];
        A[mid] = A[high];
        A[high] = temp;
        high--;
      }
    }
  
    return A;
  }
  
  // Example usage:
  const A = [2, 2, 0, 1];
  console.log(dutchNationalFlag(A)); // ➜ [0, 1, 2, 2]
  