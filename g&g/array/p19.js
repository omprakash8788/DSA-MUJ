/* Maximum Product Subarray

Given an array arr[] that contains positive and negative integers (may contain 0 as well). Find the maximum product that we can get in a subarray of arr[].

Note: It is guaranteed that the answer fits in a 32-bit integer.

Input: arr[] = [-2, 6, -3, -10, 0, 2]
Output: 180
Explanation: The subarray with maximum product is [6, -3, -10] with product = 6 * (-3) * (-10) = 180.

Input: arr[] = [-1, -3, -10, 0, 6]
Output: 30
Explanation: The subarray with maximum product is [-3, -10] with product = (-3) * (-10) = 30.

Input: arr[] = [2, 3, 4] 
Output: 24 
Explanation: For an array with all positive elements, the result is product of all elements.

*/

let arr =[-2, 6, -3, -10, 0, 2]
 let maxSoFar = arr[0];   // Maximum product so far
    let minSoFar = arr[0];   // Minimum product so far (important for negatives)
    let result = arr[0];     // Final result

    for (let i = 1; i < arr.length; i++) {
        let current = arr[i];

        // If the current number is negative, swap maxSoFar and minSoFar
        if (current < 0) {
            [maxSoFar, minSoFar] = [minSoFar, maxSoFar];
        }

        // Calculate the maximum and minimum products at this point
        maxSoFar = Math.max(current, maxSoFar * current);
        minSoFar = Math.min(current, minSoFar * current);

        // Update the result with the maximum so far
        result = Math.max(result, maxSoFar);
    }
    console.log(result)

    // return result;