const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
const seasons = {
  Jan: 'winter',
  Feb: 'winter',
  Dec: 'winter',

  Mar: 'spring',
  Apr: 'spring',
  May: 'spring',

  Jun: 'summer',
  Jul: 'summer',
  Aug: 'summer',

  Sep: 'autumn',
  Oct: 'autumn',
  Nov: 'autumn',
}
function getSeason(date) {
  let message = 'Unable to determine the time of year!'
  let error = new Error('Invalid date!');
  if(date === undefined) {
    //console.log(message)
    return message;
  }
  if (isNaN(Date.parse(date))) {
    throw error;
  }
  const day = new Date(date);
  const indicator = day.toDateString().split(' ')[1];
  return seasons[indicator];
}

module.exports = {
  getSeason
};
getSeason()