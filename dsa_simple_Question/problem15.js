/*
 Row Column Zero

 Given a matrix, if any of the cells in the matrix is 0, set all the elements in its row and column to 0.

1 1 1        1 0 1
1 0 1   =>   0 0 0
1 1 1        1 0 1


*/


// function setZeroes(matrix) {
//     const rows = new Set();
    
//     const cols = new Set();
   
//     // Step 1: Identify the rows and columns that need to be zeroed
//     for (let i = 0; i < matrix.length; i++) {
//       for (let j = 0; j < matrix[0].length; j++) {
//         if (matrix[i][j] === 0) {
//           rows.add(i);
//           cols.add(j);
//         }
//       }
//     }
  
//     // Step 2: Set entire rows to zero
//     for (let row of rows) {

//       for (let j = 0; j < matrix[0].length; j++) {
//         matrix[row][j] = 0;
//       }
//     }
  
//     // Step 3: Set entire columns to zero
//     for (let col of cols) {
//       for (let i = 0; i < matrix.length; i++) {
//         matrix[i][col] = 0;
//       }
//     }
  
//     return matrix;
//   }
  
//   // Example usage
//   const input = [
//     [1, 1, 1],
//     [1, 0, 1],
//     [1, 1, 1],
//   ];
  
//   const result = setZeroes(input);
//   console.log(result);
  

function setZeroes(matrix) {
    var m = matrix.length;
    var n = matrix[0].length;
  
    // Step 1: Make our own arrays to mark zero rows and columns
    var rowZero = [];
    var colZero = [];
  
    for (var i = 0; i < m; i++) {
      rowZero[i] = 0;
    }
  
    for (var j = 0; j < n; j++) {
      colZero[j] = 0;
    }
  
    // Step 2: Find where the 0s are
    for (var i = 0; i < m; i++) {
      for (var j = 0; j < n; j++) {
        if (matrix[i][j] === 0) {
          rowZero[i] = 1;
          colZero[j] = 1;
        }
      }
    }
  
    // Step 3: Set rows to 0
    for (var i = 0; i < m; i++) {
      if (rowZero[i] === 1) {
        for (var j = 0; j < n; j++) {
          matrix[i][j] = 0;
        }
      }
    }
  
    // Step 4: Set columns to 0
    for (var j = 0; j < n; j++) {
      if (colZero[j] === 1) {
        for (var i = 0; i < m; i++) {
          matrix[i][j] = 0;
        }
      }
    }
  
    return matrix;
  }
  
  // Example
  var matrix = [
    [1, 1, 1],
    [1, 0, 1],
    [1, 1, 1]
  ];
  
  var result = setZeroes(matrix);
  
  // Print result
  for (var i = 0; i < result.length; i++) {
    console.log(result[i]);
  }
  