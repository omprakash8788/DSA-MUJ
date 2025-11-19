
// VVT - To know Why 
// ✔ Interview often asks:
// “What if array is empty and no initialValue?”

let arr =[];
let ans = arr.reduce((acc,val)=> acc + val);
console.log(ans)

// // ❌ TypeError: Reduce of empty array with no initial value