/*
 Print Array in 2D.
 You have to print the element of 2d array, row by row.
 Input 
 let n=3;
 let m=2;
 let arr=[
        [1,2],
        [3,4],
        [5,6]
 
        ]

  Expected output :
      1 2
      3 4
      5 6
*/

let n=3;
let m=2;
let arr=[
       [1,2],
       [3,4],
       [5,6]

       ]

for(let i=0; i<n; i++){
    let newArr="";
    for(let j=0; j<m; j++){
        newArr=newArr+arr[i][j]+" "
    }
    console.log(newArr);
    
}