/*
 Two Sum Sorted

Given a sorted array, check if there exist two numbers whose sum is zero.

A: [-3, 1, 3, 4]
Answer: true


 */

let A= [-3, 1, 3, 4]
let leftp=0;
let rightp=A.length-1;
// console.log(rightp);
function  TwoSumSorted(A){
    while(leftp < rightp){
        let sum=A[leftp] + A[rightp];
        if(sum===0){
            // console.log("true")
            return true
        }
        else if(sum < 0){
            leftp++
        }
        else{
            rightp--
        }
    }
    // console.log("false")
    return false;
}
console.log(TwoSumSorted(A))



