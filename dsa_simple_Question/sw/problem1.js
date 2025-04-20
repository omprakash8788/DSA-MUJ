
/*
 Find is there sub array with the given sum [return True/False]
(Note :- size is not mention, it is variable size sliding windows)
 let arr =[1,4,20,3,10,5]
 let n=6;
 let sum=33


*/

// BR Approch.
let arr =[1,4,20,3,10,5]
let n=6;
let sum=33
let count=0;
for(let i=0; i<n; i++){
    for(let j=1; j<n; j++){
      if(sum==arr[i]+arr[j]){
        count = count + 1;
        // console.log(count)
      }
    }
}
console.log(count)
