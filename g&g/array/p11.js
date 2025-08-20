// Merge Without Extra Space

// Given two sorted arrays a[] and b[] of size n and m respectively, the task is to merge them in sorted order without using any extra space. Modify a[] so that it contains the first n elements and modify b[] so that it contains the last m elements.


// Input: a[] = [2, 4, 7, 10], b[] = [2, 3]
// Output: a[] = [2, 2, 3, 4], b[] = [7, 10]
// Explanation: After merging the two non-decreasing arrays, we get, [2, 2, 3, 4, 7, 10]
let a=[2, 4, 7, 10]
let b = [2, 3];

let n = a.length, m = b.length;

    let i = n - 1; // last index of a
    let j = 0;     // first index of b

    // Step 1: Swap if a[i] > b[j]
    while (i >= 0 && j < m) {
        if (a[i] > b[j]) {
            [a[i], b[j]] = [b[j], a[i]];
        }
        i--;
        j++;
    }

    // Step 2: Sort both arrays
    a.sort((x, y) => x - y);
    b.sort((x, y) => x - y);

    let finalAns = [a, b];
    // let finalAns = [...a, ...b]; // [ 2, 2, 3, 4, 7, 10 ]

    console.log(finalAns)