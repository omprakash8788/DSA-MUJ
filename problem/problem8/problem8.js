/*
 Q.Find maximum in array.
 You are given an array store in a variable with the size arr. You have to find the maximum number in the array.
 Input 
 let N=5;
 let arr=[12, 33, 3, 7, 87]
 Expected output =87
 */

 let N = 5;
 let arr = [12, 33, 3, 7, 87];
 let maxarr = arr[0];
 for (let i = 0; i < N; i++) {
   if (arr[i] > maxarr) {
     maxarr = arr[i];
   }
 }
 console.log(maxarr);
 