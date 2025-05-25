//  function swap(array, index1, index2) {
//  var temp = array[index1];
//  array[index1] = array[index2];
//  array[index2] = temp;
//  }

/*
 Given an array, arr[]. Sort the array using bubble sort algorithm.

Examples :

Input: arr[] = [4, 1, 3, 9, 7]
Output: [1, 3, 4, 7, 9]
*/

function bubbleSort(array) {
  for (let i = 0; i < array.length - 1; i++) {
    for (let j = 0; j < array.length - 1 - i; j++) {
      if (array[j] > array[j + 1]) {
        [array[j], array[j + 1]] = [array[j + 1], array[j]]; // Swap using destructuring
      }
    }
  }
  return array;
}

console.log(bubbleSort([6, 1, 2, 3, 4, 5])); // Output: [1, 2, 3, 4, 5, 6]
