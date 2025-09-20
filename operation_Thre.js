// let text = "hello world", brokenLetters = "ad";
// let count=0;
// let words = text.split(" "); 
// for(let i=0; i<words.length; i++){
//     let canType=true
//     for(let j=0; j<brokenLetters.length; j++){
//          if(words[i].includes(brokenLetters[j])){
//             canType=false;
//             break;
//          }
//     }
//     if(canType){
//         count++
//     }
// }
// console.log(count)

// let  x = 2, y = 7, z = 4
//   const d1 = Math.abs(x - z);
//   const d2 = Math.abs(y - z);
//   if (d1 < d2){
//     console.log(1)
//     // return 1;
//   }
//   if (d2 < d1){
//        console.log(2)
// //    return 2;
//   } 
// //   return 0;
//   console.log(0)

  function whoArrivesFirst(x, y, z) {
  const d1 = Math.abs(x - z);
  const d2 = Math.abs(y - z);
  if (d1 < d2) return 1;
  if (d2 < d1) return 2;
  return 0;
}

// examples
console.log(whoArrivesFirst(1, 2, 3)); // 1 (distance 2 vs 1 -> actually 1: person at 2 is closer, so returns 2)
// correction example:
console.log(whoArrivesFirst(1, 5, 3)); // 1 (|1-3|=2, |5-3|=2 => 0)
console.log(whoArrivesFirst(2, 4, 3)); // 0 (both distance 1)

