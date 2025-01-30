/*
 1980. Find Unique Binary String

Given an array of strings nums containing n unique binary strings each of length n, return a binary string of length n that does not appear in nums. If there are multiple answers, you may return any of them.

 

Example 1:

Input: nums = ["01","10"]
Output: "11"
Explanation: "11" does not appear in nums. "00" would also be correct.
Example 2:

Input: nums = ["00","01"]
Output: "11"
Explanation: "11" does not appear in nums. "10" would also be correct.
*/

let nums = ["01","10"];
let temp="";
for(let i=0; i<nums.length;i++){
  if(nums[i][i]=='1'){
    temp+='0';
  }
  else{
    temp+='1';
  }
}
// return temp; 
console.log(temp);


//Explain
/**
 Let's break down if (nums[i][i] == '1') so that you understand it clearly.

Understanding nums[i][i]
nums is an array of strings.
nums[i] gives the i-th string.
nums[i][i] accesses the i-th character of the i-th string (diagonal element).
Example:
nums = ["01", "10"]
Here, nums is an array with two strings:

nums[0] = "01"
nums[1] = "10"
First Iteration (i = 0):
nums[0][0] → First character of "01" → "0"
Condition: if (nums[0][0] == '1') → if ("0" == "1") → False
Else block executes → temp += '1'
Second Iteration (i = 1):
nums[1][1] → Second character of "10" → "0"
Condition: if (nums[1][1] == '1') → if ("0" == "1") → False
Else block executes → temp += '1'
Key Takeaway:
nums[i][i] selects the diagonal elements of the matrix.
The condition checks if the diagonal element is '1'.
If nums[i][i] == '1', it adds '0' to temp; otherwise, it adds '1'.
 */
