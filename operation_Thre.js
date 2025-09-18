let text = "hello world", brokenLetters = "ad";
let count=0;
let words = text.split(" "); 
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
