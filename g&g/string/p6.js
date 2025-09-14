// Maximum Difference Between Even and Odd Frequency I

// You are given a string s consisting of lowercase English letters.

// Your task is to find the maximum difference diff = freq(a1) - freq(a2) between the frequency of characters a1 and a2 in the string such that:

// a1 has an odd frequency in the string.
// a2 has an even frequency in the string.
// Return this maximum difference.

 

// Example 1:

// Input: s = "aaaaabbc"

// Output: 3

// Explanation:

// The character 'a' has an odd frequency of 5, and 'b' has an even frequency of 2.
// The maximum difference is 5 - 2 = 3.
// Example 2:

// Input: s = "abcabcab"
// Output: 1
// Explanation:
// The character 'a' has an odd frequency of 3, and 'c' has an even frequency of 2.
// The maximum difference is 3 - 2 = 1.
let s = "aaaaabbc";
 let obj = {};
    for (let i = 0; i < s.length; i++) {
        if (obj[s[i]] == undefined) {
            obj[s[i]] = 1;
        } else {
            obj[s[i]]++;
        }
    }
    let max = 0;         // will hold maximum odd frequency
    let min = Infinity;  // will hold minimum even frequency

    for (let key in obj) {
        let freq = obj[key];
        // console.log(freq)
        if (freq % 2 === 1) {        // odd frequency
            if (freq > max){
                  max = freq;
            } 
        } else {                     // even frequency
            if (freq < min){
             min = freq;
            } 
        }
    }
    // Constraints guarantee at least one odd and one even,
    // but keep a safe fallback:
    if (max === 0 || min === Infinity) return 0;

    let finalAns= max - min;
    console.log(finalAns)
    