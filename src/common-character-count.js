const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  let arr1 = s1.split('');
  let arr2 = s2.split('');
  let res = 0;
  let i = 0;
  let k;
  while (arr1.length > 0) {
    k = arr2.indexOf(arr1[i])
    if (k !== -1) {
      res++;
    }
    arr1.splice(i, 1);
    arr2.splice(k, 1)
  }
  return res;
}

module.exports = {
  getCommonCharacterCount
};
