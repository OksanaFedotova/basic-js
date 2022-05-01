const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
 const calcNeighbors = (matrix, i, j) => {
  let sum = 0;
  if (matrix[i][j - 1]) {
    sum += 1;
  }
  if (matrix[i][j + 1]) {
    sum += 1;
  }
  if (matrix[i - 1]) {
      if (matrix[i - 1][j]) {
        sum += 1;
    } else if (matrix[i - 1][j - 1]) {
       sum += 1; 
    } else if (matrix[i - 1][j + 1]) {
       sum += 1; 
    }
  }
  if (matrix[i + 1]) {
     if (matrix[i + 1][j]) {
      sum += 1;
    } else if (matrix[i + 1][j + 1]) {
       sum += 1;
    } else if (matrix[i + 1][j - 1]) {
       sum += 1;
    }
  }
  return sum;
}
function minesweeper(matrix) {
  let res = matrix.map((row, i) => {
    const rowMines = row.map((el, j) => {
      el = calcNeighbors(matrix, i, j);
      return el
    });
    return rowMines;
  });
  return res;
}
module.exports = {
  minesweeper
};
