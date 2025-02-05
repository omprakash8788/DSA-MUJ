/*
  Given an array arr[] and an integer k where k is smaller than the size of the array, the task is to find the kth smallest element in the given array.

  Follow up: Don't solve it using the inbuilt sort function.

  Examples :

  Input: arr[] = [7, 10, 4, 3, 20, 15], k = 3
  Output:  7
  Explanation: 3rd smallest element in the given array is 7.
 */

  let arr=[7, 10, 4, 3, 20, 15];
  let k=3;
  arr.sort((a,b)=>a-b)
  let newArr=arr[k-1]
//   return newArr;
console.log(newArr);
