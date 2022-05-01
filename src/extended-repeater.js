const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
 const createArrStr = (str, times) => {
  const str2 = `${str}specialSymbolToDivide`
  const res = str2.repeat(times).split('specialSymbolToDivide');
  res.pop();
  return res;
}

function repeater(param, options) {
  const str = String(param)
  options.repeatTimes = options.repeatTimes? options.repeatTimes: 1;
  options.separator = options.separator? options.separator: '+';
  options.addition = options.hasOwnProperty('addition')? String(options.addition): ''
  options.additionSeparator = options.additionSeparator?   options.additionSeparator: '|';
  options.additionRepeatTimes =  options.additionRepeatTimes?  options.additionRepeatTimes: 1;
  const arrStr1 = createArrStr(str, options.repeatTimes);
  const str2 = createArrStr(options.addition, options.additionRepeatTimes);
  const addedStr = str2.join(options.additionSeparator);
  const res = arrStr1.map((str) => `${str}${addedStr}`);
  return res.join(options.separator);
}

module.exports = {
  repeater
};
