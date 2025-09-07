// Print all the duplicate characters in a string

// Given a string s, the task is to identify all characters that appear more than once and print each as a list containing the character and its count.

// Examples:

// Input: s = "geeksforgeeks"
// Output: ['e', 4], ['g', 2], ['k', 2], ['s', 2]
// Explanation: Characters e, g, k, and s appear more than once. Their counts are shown in order of first occurrence.

// Input: s = "programming"
// Output: ['r', 2], ['g', 2], ['m', 2]
// Explanation: Only r, g, and m are duplicates. Output lists them with their counts.

// Input: s = "mississippi"
// Output: ['i', 4], ['s', 4], ['p', 2]
// Explanation: Characters i, s, and p have multiple occurrences. The output reflects that with count and order preserved.

let s = "geeksforgeeks"
let obj={}
for(let i=0; i<s.length; i++){
  if(obj[s[i]]==undefined){
    obj[s[i]]=1;
  }
  else{
      obj[s[i]]++
  }
}
// console.log(obj)
let temp=[]
for(let key in obj){
    if(obj[key]>1){
        temp.push([key, obj[key]]);
    }
}
console.log(temp)

