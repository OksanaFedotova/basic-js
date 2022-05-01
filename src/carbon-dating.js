const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(sampleActivity) {
  if (typeof sampleActivity !== 'string') {
    return false
  }
  if (sampleActivity.length === 0) {
    return false;
  }
  const N = +sampleActivity;
  if (!N) {
    return false;
  }
  if (sampleActivity >= 15 || sampleActivity <= 0) {
    return false
  }
  const N0 = 15;
  const k = 0.693/ 5730;
  const t =  (Math.log(N0/N))/k
  return Math.ceil(t);
}

module.exports = {
  dateSample
};
