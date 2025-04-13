/*
  Next Greater Permutation

Given an array, rearrange it to its next greater permutation. Do it in-place with extra constant memory only. Do not use any library function for the next permutation.

Example
Array: [1, 2, 3, 4]
Next Greater Permutation: [1, 2, 4, 3]
Next Greater Permutation: [1, 3, 2, 4]
Next Greater Permutation: [1, 3, 4, 2]
Next Greater Permutation: [1, 4, 2, 3]
Next Greater Permutation: [1, 4, 3, 2]
Next Greater Permutation: [2, 1, 3, 4]
*/

function nextPermutation(arr) {
    let n = arr.length;
    let i = n - 2;

    // Step 1: find the first decreasing element from right
    while (i >= 0 && arr[i] >= arr[i + 1]) {
        i--;
    }

    if (i >= 0) {
        // Step 2: find the just greater element from the end
        let j = n - 1;
        while (arr[j] <= arr[i]) {
            j--;
        }

        // Step 3: swap arr[i] and arr[j]
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }

    // Step 4: reverse the rest
    let left = i + 1, right = n - 1;
    while (left < right) {
        [arr[left], arr[right]] = [arr[right], arr[left]];
        left++;
        right--;
    }
}

let arr = [1, 2, 3, 6, 5, 4];
nextPermutation(arr);
console.log(arr); // [1, 2, 4, 3, 5, 6]

