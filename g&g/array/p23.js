// Median of Two Sorted Arrays

// Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.

// The overall run time complexity should be O(log (m+n)).

// Example 1:

// Input: nums1 = [1,3], nums2 = [2]
// Output: 2.00000
// Explanation: merged array = [1,2,3] and median is 2.
// Example 2:

// Input: nums1 = [1,2], nums2 = [3,4]
// Output: 2.50000
// Explanation: merged array = [1,2,3,4] and median is (2 + 3) / 2 = 2.5.


let nums1 = [1,3], nums2 = [2];

// Math Approch
// let fa=[...nums1, ...nums2]
// fa.sort((a,b)=>(a-b))
// let n=fa.length
// // (n+1)/2
// let findMiddle = (n+1)/2
// return findMiddle;

// Second approch
 let fa = [...nums1, ...nums2];
    fa.sort((a, b) => a - b);
    let n = fa.length;

    if (n % 2 === 1) {
        // Odd length → middle element
        // return fa[Math.floor(n / 2)];
        let oddLen=fa[Math.floor(n / 2)];
        console.log(oddLen)
    } else {
        // Even length → average of two middle elements
        let mid1 = fa[n / 2 - 1];
        let mid2 = fa[n / 2];
        
        let finalAns= (mid1 + mid2) / 2;
        console.log(finalAns)
    }