// Count Inversions

// Given an array of integers arr[]. You have to find the Inversion Count of the array. 
// Note : Inversion count is the number of pairs of elements (i, j) such that i < j and arr[i] > arr[j].


// Examples:

// Input: arr[] = [2, 4, 1, 3, 5]
// Output: 3
// Explanation: The sequence 2, 4, 1, 3, 5 has three inversions (2, 1), (4, 1), (4, 3).

// Input: arr[] = [2, 3, 4, 5, 6]
// Output: 0
// Explanation: As the sequence is already sorted so there is no inversion count.

let arr =[2, 4, 1, 3, 5]
  // code here
        let count =0;
        for(let i=0; i<arr.length; i++){
            for(let j=i+1; j<arr.length; j++){
                    if(arr[i]>arr[j]){
                        count++  
                }
            }
        }
        // return count;
        console.log(count)