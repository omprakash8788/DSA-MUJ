/*
  Sorted Arrays Intersection

  Given 2 sorted arrays, return the intersection of both the arrays. The intersection of 2 arrays means all the elements which are present in both.

Example
Array 1: [1, 3, 4, 5, 5, 6, 6, 7]
Array 2: [2, 5, 6, 6, 7, 8]
Intersection: [5, 6, 6, 7]


*/
let res=[]
let A=[1, 3, 4, 5, 5, 6, 6, 7];
let B=[2, 5, 6, 6, 7, 8];
 
let i=0;
let j=0;
while(i<A.length && j<B.length){
    if(A[i]==B[j]){
        res.push(A[i]) 
        i++
        j++

    }
    else if(A[i] < B[j]){
        i++
    }
    else{
        j++
    }
}
console.log(res)