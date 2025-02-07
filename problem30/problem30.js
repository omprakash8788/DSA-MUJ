/*
 Print matrix in zigzag format.
 let n=3;
 let m=3;
 let matrix=[
           [1,2,3],
           [4,5,6],
           [7,8,9]
           ]
*/

let n = 3;
let m = 3;
let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

let newMatrix="";
for(let i=0; i<n; i++){
    if(i%2==0){
        for(let j=m-1; j>=0; j--){
            newMatrix=newMatrix+matrix[i][j]+" "
        }
    }
    else{
        for(let j=0; j<n; j++){
            newMatrix=newMatrix+matrix[i][j]+" "
        }
    }
}

console.log(newMatrix);

