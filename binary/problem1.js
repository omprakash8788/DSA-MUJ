

/* Binary Search Question:
 You are given a sorted array of integers and a target value. Implement a function to find the index of the target value using Binary Search. If the target is not found, return -1.
Input: arr = [1, 2, 3, 4, 5, 6, 7, 8, 9], target = 5  
Output: 4  



Explanation: The number 5 is found at index 4. */
function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);

        if (arr[mid] === target) {
            return mid;  // Target found
        } else if (arr[mid] < target) {
            left = mid + 1;  // Search in the right half
        } else {
            right = mid - 1;  // Search in the left half
        }
    }
    
    return -1;  // Target not found
}

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(binarySearch(arr, 5));  // Output: 4 (index of 5)
