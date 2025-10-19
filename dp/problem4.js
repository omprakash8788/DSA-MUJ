// Minimum steps to delete a string after repeated deletion of palindrome substrings


// Given a string str, containing only digits from '0' to '9'. Your task is to find the minimum number of operations required to delete all the digits of string, where in each operation we can delete a palindromic substring

// Note: After deleting the substring, the remaining parts are concatenated.


// Input: str = "2553432"
// Output: 2
// Explanation: We can first delete the substring "55", and the remaining string will be "23432", which is a palindrome and can be deleted in second operation.

// Input: str = "1234"
// Output: 4
// Explanation: All 4 digits need to be deleted separately. Note that a single character is also a palindrome.


// [Naive Approach] - Using Recursion - Exponential Time
// We can use recursion to solve the problem.

// minOps(atr, start, end):

// If the size of the string is one then only one operation is needed.
// Else If the size of the string is 2 and both characters are the same then return 1.
// Else If the size is more than 2 and first two characters are same, then recursively call for minOps(atr, start + 2, end)
// Else Initialize result as minOps(atr, start + 1, end)
// Now search for the starting character ( str[start] ) in the remaining substring. i.e., we search for i = start + 2 to end. If we find a match, i.e., if str[start] = str[end], then make two recursive calls. minOps(str, start + 1, i - 1) and minOps(str, i + 1, end)


// Recursive function to find the minimum operations 
// required to delete a string
function minOp(str, start, end) {
    
    // if the string is empty
    if (start > end)
        return 0;

    // if the string has only one character
    if (start === end)
        return 1;

    // if string has only two characters and both are same
    if (start + 1 === end && str[start] === str[end])
        return 1;

    // remove the first character and operate on the rest
    let res = 1 + minOp(str, start + 1, end);

    // if the first two characters are same
    if (str[start] === str[start + 1])
        res = Math.min(res, 1 + minOp(str, start + 2, end));

    // find the index of the next character same as the first
    for (let i = start + 2; i <= end; i++) {
        if (str[start] === str[i]) {
            res = Math.min(res, minOp(str, start + 1, i - 1) + minOp(str, i + 1, end));
        }
    }
    return res;
}

const str = "2553432";
console.log(minOp(str, 0, str.length - 1));
