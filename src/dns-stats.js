const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */

 const createStr = (arr, n) => {
  const res = []
  const limit = arr.length - n;
  for (let i = arr.length - 1; i >= limit; i--) {
    res.push(arr[i]);
  }
  return res.join('.');
}

function getDNSStats(domains) {
  const res = domains.reduce((acc, curr) => {
    const arr = curr.split('.');
    for (let i = 1; i <= arr.length; i++) {
      let str = `.${createStr(arr, i)}`;
      acc[str]? acc[str] += 1: acc[str] = 1;
    }
    return acc
  }, {})
  return res
}

module.exports = {
  getDNSStats
};
