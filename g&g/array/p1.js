// Minimum Jumps

// You are given an array arr[] of non-negative numbers. Each number tells you the maximum number of steps you can jump forward from that position.

// For example:


// If arr[i] = 3, you can jump to index i + 1, i + 2, or i + 3 from position i.
// If arr[i] = 0, you cannot jump forward from that position.
// Your task is to find the minimum number of jumps needed to move from the first position in the array to the last position.

// Note:  Return -1 if you can't reach the end of the array.

// Examples : 

// Input: arr[] = [1, 3, 5, 8, 9, 2, 6, 7, 6, 8, 9]
// Output: 3 
// Explanation: First jump from 1st element to 2nd element with value 3. From here we jump to 5th element with value 9, and from here we will jump to the last

// Input: arr = [1, 4, 3, 2, 6, 7]
// Output: 2 
// Explanation: First we jump from the 1st to 2nd element and then jump to the last element.

// Problem in Simple Words
// You’re standing at index 0 in an array.
// The number at each index tells you how far you can jump forward from there (maximum steps).

// Your goal: Reach the last index in minimum jumps possible.
// If it’s not possible to reach the end, return -1.

// Start at index 0 → value is 1 → You can jump only 1 step forward.
// So your next position must be index 1.

// Index 1 → value is 3 → You can jump up to 3 steps forward (index 2, 3, or 4).
// Best choice: Go to index 4 (value 9) because it lets you jump far.

// Index 4 → value is 9 → You can directly reach the last index.

//  Minimum jumps = 3
// 1 → 3 → 9 → end

function minJumps(arr) {
    if (arr.length <= 1){
        return 0; // Already at last index

    }
    if (arr[0] === 0){
     return -1;   // Can't move at all
    } 

    let maxReach = arr[0]; // Farthest we can reach initially
    let steps = arr[0];    // Steps left in current jump
    let jumps = 1;         // First jump already made from index 0

    for (let i = 1; i < arr.length; i++) {
        // If we've reached the end
        if (i === arr.length - 1){
            return jumps;
        } 

        // Update the farthest we can go
        maxReach = Math.max(maxReach, i + arr[i]);

        // Use a step
        steps--;

        // No more steps → need to jump
        if (steps === 0) {
            jumps++;

            // If current index is already beyond maxReach → can't move further
            if (i >= maxReach){
              return -1;
            } 

            // Reset steps for the new jump
            steps = maxReach - i;
        }
    }

    return -1; // If we never reached the end
}

// Example usage
let arr = [1, 3, 5, 8, 9, 2, 6, 7, 6, 8, 9];
console.log(minJumps(arr)); // Output: 3


