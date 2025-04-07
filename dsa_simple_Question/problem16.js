/*
  Given a matrix, rotate the matrix 90 degrees clockwise.

  Matrix:
1 2 3
4 5 6
7 8 9
After rotation:
7 4 1
8 5 2
9 6 3


*/
// let matrix=[[1,2,3],[4.5,6],[7,8,9]]

function rotateMatrix(matrix) {
    const result = [];
  
    for (let col = 0; col < matrix[0].length; col++) {
      const newRow = [];
      for (let row = matrix.length - 1; row >= 0; row--) {
        newRow.push(matrix[row][col]);
      }
      result.push(newRow);
    }
  
    return result;
  }
  
  // Example:
  const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ];
  
  const rotated = rotateMatrix(matrix);
  console.log(rotated);
  // Output:
  // [
  //   [7, 4, 1],
  //   [8, 5, 2],
  //   [9, 6, 3]
  // ]
  
