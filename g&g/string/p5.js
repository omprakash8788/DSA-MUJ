let words = ["leet", "code"],
  x = "e";
// Output: [0,1]
let temp = [];
for (let i = 0; i < words.length; i++) {
  for (let j = 0; j < words[i].length; j++) {
    if (words[i][j] == x) {
      temp.push(i, j);
    
    }
  }
}
// return temp;
console.log(temp);
