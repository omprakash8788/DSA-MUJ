/*
 Find	the	Median	of	Two	Sorted	Arrays	of	the	Same	Size
Recall	that	median	in	an	even	number	of	a	set	is	the	average	of	the	two
middle	numbers.	If	the	array	is	sorted,	this	is	simple.
 [1,2,3,4]	has	the	median	of	(2+3)/2	=	2.5.

*/
//  let arr=[1,2,3,4]
// function medianOfArray(array) {
//   var length = array.length;
//   // Odd
//   if (length % 2 == 1) {
//     return
//     array[Math.floor(length / 2)];
//   } else {
//     // Even
//     return
//     (array[length / 2] + array[length / 2 - 1]) / 2;
//   }
// }
// console.log(medianOfArray(arr))


let arr = [1, 2, 3, 4];

function medianOfArray(array) {
  var length = array.length;
  // Odd
  if (length % 2 == 1) {
    return array[Math.floor(length / 2)];
  } else {
    // Even
    return (array[length / 2] + array[length / 2 - 1]) / 2;
  }
}

console.log(medianOfArray(arr)); // Output: 2.5

