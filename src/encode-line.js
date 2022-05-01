const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
 function encodeLine(str){
  if(str.length === 0) {
    return ''
  }
  const data = str.split('');
  const result = [[1, data[0]]];
  let k = 0;
  for (let i = 1; i < data.length; i++) {
    if (data[i-1] === data[i]) {
      result[k][0] += 1; 
    } else {
      k++
      result.push([1, data[i]])
    }
  }
  return result.map((arr) => arr.filter((el) => el !== 1).join('')).join('');
}

module.exports = {
  encodeLine
};
