// Three way partitioning

// Given an array and a range a, b. The task is to partition the array around the range such that the array is divided into three parts.
// 1) All elements smaller than a come first.
// 2) All elements in range a to b come next.
// 3) All elements greater than b appear in the end.
// The individual elements of three sets can appear in any order. You are required to return the modified array.

// Note: The generated output is true if you modify the given array successfully. Otherwise false.

// Geeky Challenge: Solve this problem in O(n) time complexity.

// Input: arr[] = [1, 2, 3, 3, 4], a = 1, b = 2
// Output: true
// Explanation: One possible arrangement is: {1, 2, 3, 3, 4}. If you return a valid arrangement, output will be true.

// Input: arr[] = [1, 4, 3, 6, 2, 1], a = 1, b = 3
// Output: true
// Explanation: One possible arrangement is: {1, 3, 2, 1, 4, 6}. If you return a valid arrangement, output will be true

// Note - This problem is same like datch flag

let arr = [1, 4, 3, 6, 2, 1],
  a = 1,
  b = 3;
// your code here
let low = 0,
  mid = 0,
  high = arr.length - 1;

while (mid <= high) {
  if (arr[mid] < a) {
    [arr[low], arr[mid]] = [arr[mid], arr[low]];
    low++;
    mid++;
  } else if (arr[mid] >= a && arr[mid] <= b) {
    mid++;
  } else {
    // arr[mid] > b
    [arr[mid], arr[high]] = [arr[high], arr[mid]];
    high--;
  }
}
console.log(arr);
// return arr;

/*
 Expain part 
 Problem Reminder

Tumhe array aur range [a, b] di gayi hai. Tumhara kaam hai array ko aise arrange karna ki:

Sabse pehle wo elements aaye jo a se chhote ho

Phir wo elements jo a aur b ke beech ho (inclusive)

Phir wo elements jo b se bade ho

Agar tum is rule ke hisaab se array ko arrange kar sakte ho → Output true
Agar nahi kar sakte → false

First Example
Input:
arr = [1, 2, 3, 3, 4]
a = 1
b = 2

Output: true

Step-by-step

Elements < a (=1) → Koi nahi (kyunki sab ≥ 1 hai)

Elements in range [1,2] → [1,2]

Elements > b (=2) → [3,3,4]

One possible arrangement:
[1, 2, 3, 3, 4]
Ye already valid hai → Isliye true.

Second Example
Input:
arr = [1, 4, 3, 6, 2, 1]
a = 1
b = 3

Output: true

Step-by-step

Elements < 1 → Koi nahi

Elements in range [1,3] → [1,3,2,1]

Elements > 3 → [4,6]

One possible valid arrangement:
[1, 3, 2, 1, 4, 6]
Ye valid hai → Isliye true.

Key Point

Output true/false yeh check nahi karta ki array sorted hai ya nahi

Bas yeh check karta hai ki kya aap array ko teen parts me partition kar sakte ho ya nahi.

Agar ho sakta hai → true

Agar nahi → false
 
 */

/*
For loop approch (Not reccommded)

let arr = [1, 4, 3, 6, 2, 1],
  a = 1,
  b = 3;
  let left = [];
     let middle = [];
     let right = []
     for (let i = 0; i < arr.length; i++) {
         if (arr[i] < a) {
             left.push(arr[i]);
         } else if (arr[i] >= a && arr[i] <= b) {
             middle.push(arr[i]);
         } else {
             right.push(arr[i]);
         }
     }
     return [...left, ...middle, ...right];

*/
