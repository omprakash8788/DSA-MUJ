/*
 Find the Longest Substring Without Repeating Characters (Two Pointers / Sliding Window)
Problem Statement:
Given a string s, find the length of the longest substring without repeating characters.
Solve this using the two-pointer (sliding window) technique in O(n) time complexity.
 

Input: s = "abcabcbb"  
Output: 3  
Explanation: The longest substring without repeating characters is "abc", which has length 3.

*/

function lengthOfLongestSubstring(s) {
    let left = 0, maxLength = 0;
    let charSet = new Set();
    console.log("line 17", charSet)

    for (let right = 0; right < s.length; right++) {
        while (charSet.has(s[right])) {
            charSet.delete(s[left]); // Remove the leftmost character
            left++; // Shrink window
        }
        
        charSet.add(s[right]); // Add current character
        maxLength = Math.max(maxLength, right - left + 1); // Update max length
    }

    return maxLength;
}

// Test cases
console.log(lengthOfLongestSubstring("abcabcbb")); // Output: 3
console.log(lengthOfLongestSubstring("bbbbb")); // Output: 1
console.log(lengthOfLongestSubstring("pwwkew")); // Output: 3
console.log(lengthOfLongestSubstring("")); // Output: 0
console.log(lengthOfLongestSubstring("au")); // Output: 2
console.log(lengthOfLongestSubstring("dvdf")); // Output: 3
