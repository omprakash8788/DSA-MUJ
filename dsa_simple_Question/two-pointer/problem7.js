/*
  k-diff pairs

  Given a sorted array A of size n and a number k, return the number of unique pairs which have a difference of k.

|arr[i] - arr[j]| = k where i < j

Example
A: [1, 3, 5, 7, 10]
k: 2
Answer: 3
A: [1, 3, 5, 7, 10]
k: 3
Answer: 1
A: [1, 3, 5, 7, 10]
k: 1
Answer: 0

*/

function kDiffPairs(arr, k) {
    let count = 0;
    let i = 0;
    let j = 1;
  
    while (j < arr.length) {
      let diff = arr[j] - arr[i];
  
      if (diff === k) {
        count++;
        // skip duplicates
        let currentI = arr[i];
        let currentJ = arr[j];
        while (i < arr.length && arr[i] === currentI) i++;
        while (j < arr.length && arr[j] === currentJ) j++;
        if (i === j) j++;
      } else if (diff < k) {
        j++;
      } else {
        i++;
        if (i === j) j++;
      }
    }
  
    return count;
  }
  
  // Examples:
  console.log(kDiffPairs([1, 3, 5, 7, 10], 2)); // ➜ 3 → [1,3], [3,5], [5,7]
  console.log(kDiffPairs([1, 3, 5, 7, 10], 3)); // ➜ 1 → [7,10]
  console.log(kDiffPairs([1, 3, 5, 7, 10], 1)); // ➜ 0
  