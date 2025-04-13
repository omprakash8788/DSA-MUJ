/*
 Question: Inversion Count (Reverse Order Version)
Problem Statement:
Inversion count of an array represents how far the array is from being sorted.
In this variation, we define an inversion as a pair of indices (i, j) such that:

i > j and A[i] < A[j]

In other words, you're counting how many times a smaller element appears after a bigger element in the array — i.e., the array is "less sorted" in reverse direction.

🧾 Input:
An integer n — the number of elements in the array.

An array A of n integers.

🧾 Output:
Print a single integer — the inversion count based on the condition:
A[i] < A[j] and i > j


✅ Example:
Input:

5
1 1 2 2 3


Output:

0
*/

/*
 Dry section 

 :

🔶 Inversion Count Kya Hota Hai?
Inversion count ye batata hai ki ek array kitna unsorted hai.
Agar array fully sorted hai (ascending), to inversion count 0 hoga.
Agar array fully reverse sorted hai (descending), to inversion count maximum hoga.


🔶 Tumhare Sawal Mein Kya Poocha Gaya Hai?
Normally inversion count check karta hai:

A[i] > A[j] and i < j
Yani left wala element bada hai right wale se. (Matlab galat position pe hai)

Lekin tumne ulta condition diya hai:

A[i] < A[j] and i > j

Yani:

i > j → index i j ke baad aata hai (reverse indexing)

A[i] < A[j] → value choti hai

Iska matlab:
Ye pairs dhoondhne hain jahan pehle wale element ka index chhota hai, lekin value zyada hai (yaani bad sorting pattern reverse mein).

🔶 Example:
js
Copy
Edit
let arr = [1, 1, 2, 2, 3];
Isme:

Ye array sorted hai.

To koi bhi i > j aisa nahi milega jahan A[i] < A[j]

Isliye inversion count = 0

🔶 Ek Aur Example lete hain:
js
Copy
Edit
let arr = [3, 2, 1];
Loop mein hum check karte hain har i > j pe:

(1,0): A[1]=2 < A[0]=3 → ✅

(2,0): A[2]=1 < A[0]=3 → ✅

(2,1): A[2]=1 < A[1]=2 → ✅

Total = 3 inversions
*/

function countInversions(arr) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < i; j++) {
        if (arr[i] < arr[j]) {
          count++;
        }
      }
    }
    return count;
  }
  
  let arr = [1, 1, 2, 2, 3];
  console.log("Inversion Count:", countInversions(arr));
  