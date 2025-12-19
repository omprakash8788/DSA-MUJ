/*

Given a square matrix, calculate the absolute difference between the sums of its diagonals.

For example, the square matrix arr is shown below:

1 2 3
4 5 6
9 8 9  

The left-to-right diagonal =1+5+9=15 . The right to left diagonal =3+5+9=17 . Their absolute difference is |15-17|=2.

diagonal Difference takes the following parameter:

int arr[n][m]: an array of integers.

*/

let arr=[[1,2,3],[4,5,6],[9,8,9]]
let leftdiagonal=0;
let rightdiagonal=0;
for(let i=0; i<arr.length; i++){
    for(let j=0; j<arr.length; j++){
        if(i===j){
            leftdiagonal=leftdiagonal+arr[i][j];

        }
        if(i===arr.length-j-1){
            rightdiagonal=rightdiagonal+arr[i][j]
        }
    }
}
console.log(rightdiagonal-leftdiagonal);


