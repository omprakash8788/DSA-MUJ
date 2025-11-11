let str = "a.b.c.d.e";
/* 
{
  "a": {
    "b": {
      "c": {
        "d": {
          "e": {}
        }
      }
    }
  }
}
 */

let part = str.split('.')
// console.log(part)
let obj={};
for(let i=part.length-1; i>=0; i--){
    
    obj={[part[i]] : {...obj}}
}
console.log(JSON.stringify(obj))