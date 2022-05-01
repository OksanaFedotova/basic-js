const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
const discardPrev = (arr, i) => {
  if (i < 1) {
    return arr;
  }
  arr.splice(i - 1, 1);
  return arr;
}
const discardNext = (arr, i) => {
  if (i >= arr.length - 1) {
    return arr;
  }
  arr.splice(i + 1, 1);
  return arr;
}
const doublePrev = (arr, i) => {
  if (i < 1) {
    return arr;
  }
  arr.splice(i - 1, 0, arr[i - 1]);
  return arr;
}
const doubleNext = (arr, i) => {
  if (i >= arr.length - 1) {
    return arr;
  }
  arr.splice(i + 1, 0, arr[i + 1]);
  return arr;
}
const check = (opt, sequence1, sequence2) => {
  if (!opt.hasOwnProperty(sequence2)) {
    return false;
  } else {
    if (sequence1.includes('next') && sequence2.includes('prev')) {
      return true;
    }
  }
}
function transform(initial) {
  let error = new Error("'arr' parameter must be an instance of the Array!")
  if (!Array.isArray(initial)) {
    throw error
  }
  let arr = initial.slice(0);
  const opt = {
    '--discard-prev': discardPrev,
    '--double-prev': doublePrev,
    '--double-next': doubleNext,
    '--discard-next': discardNext
  }

  for (let i = 0; i < arr.length; i++) {
    if(opt.hasOwnProperty(arr[i])) {
      if (check(opt, arr[i], arr[i+2])) {
          if (arr[i].includes('discard')) {
              arr.splice(i + 2, 1);
              const transformMethod = opt[arr[i]];
              arr = transformMethod(arr, i);
              arr.splice(i, 1);
          } else if(arr[i + 2].includes('double')) {
            const transformMethod = opt[arr[i]];
            arr = transformMethod(arr, i);
            arr.splice(i, 1);
            arr.splice(i + 2, 1, arr[i + 1]);
          } else {
            // const transformMethod = opt[arr[i]];
            // arr = transformMethod(arr, i);
            // arr.splice(i, 1);
            arr.splice(i, 1);
            arr.splice(i + 1, 1)
          }
      } else  {
        const transformMethod = opt[arr[i]];
        arr = transformMethod(arr, i);
        arr.splice(i, 1);
      }
    }
  }
   return arr
}


module.exports = {
  transform
};

// const arr = [1, 2, 3, '--double-next', 1337, '--discard-prev', 4, 5];
// console.log(transform(arr))