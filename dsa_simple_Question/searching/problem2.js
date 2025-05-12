/*
 Search Range

 Given a sorted array and a number key, find the index of the first and last occurrence of the key in the array.

If the key is not present, return [-1, -1].

Expected Time Complexity: O(log n)

Examples
Array: [1, 2, 3, 3, 3, 4, 4, 5]
Number: 3
Answer: [2, 4]
Array: [1, 2, 3, 3, 3, 4, 4, 5]
Number: 5
Answer: [7, 7]
Array: [1, 2, 3, 3, 3, 4, 4, 5]
Number: 6
Answer: [-1, -1]

*/

function searchRange(arr, key) {
    function findFirst(arr, key) {
      let left = 0, right = arr.length - 1;
      let result = -1;
  
      while (left <= right) {
        let mid = Math.floor((left + right) / 2);
  
        if (arr[mid] === key) {
          result = mid;        // store result
          right = mid - 1;     // keep searching on left side
        } else if (arr[mid] < key) {
          left = mid + 1;
        } else {
          right = mid - 1;
        }
      }
  
      return result;
    }
  
    function findLast(arr, key) {
      let left = 0, right = arr.length - 1;
      let result = -1;
  
      while (left <= right) {
        let mid = Math.floor((left + right) / 2);
  
        if (arr[mid] === key) {
          result = mid;        // store result
          left = mid + 1;      // keep searching on right side
        } else if (arr[mid] < key) {
          left = mid + 1;
        } else {
          right = mid - 1;
        }
      }
  
      return result;
    }
  
    let first = findFirst(arr, key);
    let last = findLast(arr, key);
  
    return [first, last];
  }

  console.log(searchRange([1, 2, 3, 3, 3, 4, 4, 5], 3)); // [2, 4]
console.log(searchRange([1, 2, 3, 3, 3, 4, 4, 5], 5)); // [7, 7]
console.log(searchRange([1, 2, 3, 3, 3, 4, 4, 5], 6)); // [-1, -1]
