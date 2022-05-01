const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const str = n.toString();
  let arr = [];
  for (let i = 0; i < str.length; i++) {
    const arr2 = str.split('')
    arr2.splice(i, 1);
    const num = arr2.join('');
    arr.push(num)
  }
  return Math.max(...arr);
}

module.exports = {
  deleteDigit
};
