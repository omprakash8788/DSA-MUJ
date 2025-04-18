/*
 Unique Elements in Sorted Array

 Given a sorted array A, find the size of array A after removing the duplicate elements.

 Examples:
A: [1 2 3 3 3 4 5 5]

Size of A after removing duplicate elements: 5

*/
let A=[1, 2, 3, 3, 3, 4, 5, 5]

if(A.length==0){
    return 0;
}

let i=0;

for(let j=1; j<A.length; j++){

  if(A[j]!==A[i]){
    i++;
    A[i]=A[j]
  }
}
console.log(i+1)
