module.exports = function solveSudoku(matrix) {
  solver(matrix);
  return matrix;
}

function solver(matrix) {
  var i, j, isSolved, currentNum;
  for (i = 0; i < 9; i++) { 
      for (j = 0; j < 9; j++) {
          if (!matrix[i][j]) { 
              for (currentNum = 1; currentNum <= 9; currentNum++) { 
                  if (isValidToInsert(matrix, i, j, currentNum)) { 
                      matrix[i][j] = currentNum;
                      isSolved = solver(matrix);
                      if (isSolved) { return true; }
                      matrix[i][j] = 0;
                  }
              }
              return false;
          }
      }
  }
  return true;
}

function isValidToInsert(matrix, i, j, currentNum) {
  var a, b; 

  for (a = 0; a < 9; a++) { 
      if (a != i && matrix[a][j] == currentNum) {
          return false;
      }
  }

  for (a = 0; a < 9; a++) { 
      if (a != j && matrix[i][a] == currentNum) {
          return false;
      }
  }

  var y = Math.floor((i / 3)) * 3, 
      x = Math.floor((j / 3)) * 3; 
  for (a = 0; a < 3; a++) { 
      for (b = 0; b < 3; b++) { 
          if (a != i && b != j && matrix[y + a][x + b] == currentNum) {
              return false;
          }
      }
  }
  return true;
}