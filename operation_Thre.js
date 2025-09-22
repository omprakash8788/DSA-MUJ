let s = "leeetcode"
let res="";
for(let i=0; i<s.length; i++){
    let count=0;
    for(let j=i+1; j<s.length; j++){
        if(s[i]==s[j]){
            count++;
            
        }
    }
     if (count === 3) {
        continue;  // skip this character
    }
    res=res+s[i]
}
console.log(res)
