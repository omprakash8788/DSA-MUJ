/*
Given two sorted arrays A and B, find the merged sorted array C by merging A and B.

A= [1, 2, 3, 4, 4]
B=[2, 4, 5, 5]
C= [1, 2, 2, 3, 4, 4, 4, 5, 5]
*/

// Approch 1
// let A= [1, 2, 3, 4, 4]
// let B=[2, 4, 5, 5]

// let c=[...A, ...B]
// let d= c.sort((a,b)=>(a-b))
// console.log(d);


function mergeSortedArrays(A, B) {
    let i = 0, j = 0;
    let C = [];
    
    while (i < A.length && j < B.length) {
        if (A[i] < B[j]) {
            C.push(A[i]);
            i++;
        } else {
            C.push(B[j]);
            j++;
        }
    }
    
    // Add remaining elements from A
    while (i < A.length) {
        C.push(A[i]);
        i++;
    }
    
    // Add remaining elements from B
    while (j < B.length) {
        C.push(B[j]);
        j++;
    }
    
    return C;
}

// Example usage
let A = [1, 2, 3, 4, 4];
let B = [2, 4, 5, 5];
console.log(mergeSortedArrays(A, B)); // Output: [1, 2, 2, 3, 4, 4, 4, 5, 5]

