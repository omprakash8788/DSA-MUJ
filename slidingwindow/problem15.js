/*
  No of Good Substrings
Problem Statement
A string is considered "good" if there are no repeated characters. Given a string s, return the number of good substrings of length three in s.

Note that if there are multiple occurrences of the same substring, each occurrence should be counted.

A substring is a contiguous sequence of characters in a string.

Constraints
1 <= s.length <= 100
s consists of lowercase English letters.
Example Inputs and Outputs
Example 1:

Input: s = "xyzzaz"
Output: 1
Explanation: There are 4 substrings of size 3: "xyz", "yzz", "zza", and "zaz". The only good substring of length 3 is "xyz".
Example 2:

Input: s = "aababcabc"
Output: 4
Explanation: There are 7 substrings of size 3: "aab", "aba", "bab", "abc", "bca", "cab", and "abc". The good substrings are "abc", "bca", "cab", and "abc".
Brute Force Approach
a. Approach
The brute-force approach involves generating all possible substrings of length 3 and checking if each substring contains only unique characters.

b. Steps
Loop through each starting index of the string up to s.length - 2.
For each index, extract a substring of length 3.
Check if the substring has all unique characters.
Count each valid "good" substring.
c. Time & Space Complexity
Time Complexity: O(n), where n is the length of s.
Space Complexity: O(1), for the substring storage.


*/

// function countGoodSubstrings(s) {
//     let count = 0;

//     for (let i = 0; i < s.length - 2; i++) {
//         const substr = s.slice(i, i + 3);
//         if (isGood(substr)) {
//             count++;
//         }
//     }
//     return count;
// }

// function isGood(sub) {
//     return sub[0] !== sub[1] && sub[1] !== sub[2] && sub[0] !== sub[2];
// }

// const s = "xyzzaz";
// console.log(countGoodSubstrings(s));  // Output: 1

/*
 Efficient Approach (Sliding Window)
a. Approach
The sliding window approach allows for a more efficient solution by maintaining a window of size 3 and checking for uniqueness as the window slides.

b. Steps
Initialize a window of size 3 at the start of s.
Check if all characters in the window are unique.
Slide the window one character to the right and repeat until the end of the string.
Count each valid "good" substring.
c. Time & Space Complexity
Time Complexity: O(n), as we only need to check each character once within the window.
Space Complexity: O(1), for tracking characters in the window.
*/

function countGoodSubstrings(s) {
    let count = 0;

    for (let i = 0; i < s.length - 2; i++) {
        if (s[i] !== s[i + 1] && s[i + 1] !== s[i + 2] && s[i] !== s[i + 2]) {
            count++;
        }
    }
    return count;
}

const s = "aababcabc";
console.log(countGoodSubstrings(s));  // Output: 4