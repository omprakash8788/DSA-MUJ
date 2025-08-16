// Kadane's Algorithm

// You are given an integer array arr[]. You need to find the maximum sum of a subarray (containing at least one element) in the array arr[].

// Note : A subarray is a continuous part of an array.

// Input: arr[] = [2, 3, -8, 7, -1, 2, 3]
// Output: 11
// Explanation: The subarray [7, -1, 2, 3] has the largest sum 11.

// Input: arr[] = [-2, -4]
// Output: -2
// Explanation: The subarray [-2] has the largest sum -2.

let arr = [2, 3, -8, 7, -1, 2, 3]

 let maxSoFar = arr[0];   // Overall maximum
    let currSum = arr[0];    // Current subarray sum

    for (let i = 1; i < arr.length; i++) {
        // Agar current element ko include karna behtar hai ya naya start karna
        currSum = Math.max(arr[i], currSum + arr[i]);
        
        // Update overall maximum
        maxSoFar = Math.max(maxSoFar, currSum);
    }

    // return maxSoFar;
    console.log(maxSoFar)
