// Maximum Number of Words You Can Type

// There is a malfunctioning keyboard where some letter keys do not work. All other keys on the keyboard work properly.

// Given a string text of words separated by a single space (no leading or trailing spaces) and a string brokenLetters of all distinct letter keys that are broken, return the number of words in text you can fully type using this keyboard.

 

// Example 1:

// Input: text = "hello world", brokenLetters = "ad"
// Output: 1
// Explanation: We cannot type "world" because the 'd' key is broken.
// Example 2:

// Input: text = "leet code", brokenLetters = "lt"
// Output: 1
// Explanation: We cannot type "leet" because the 'l' and 't' keys are broken.
// Example 3:

// Input: text = "leet code", brokenLetters = "e"
// Output: 0
// Explanation: We cannot type either word because the 'e' key is broken.
 


// let text = "hello world", brokenLetters = "ad"
let text = "hello world", brokenLetters = "ad";
let count=0;
let words = text.split(" "); 
console.log(words) // [ 'hello', 'world' ]
for(let i=0; i<words.length; i++){
    let canType=true
    for(let j=0; j<brokenLetters.length; j++){
         if(words[i].includes(brokenLetters[j])){
            canType=false;
            break;
         }
    }
    if(canType){
        count++
    }
}
console.log(count)

