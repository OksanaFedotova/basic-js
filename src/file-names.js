const { NotImplementedError } = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  const obj = names.reduce((acc, name, i) => {
    if (acc.hasOwnProperty(name)) {
      if(acc[name] === 0) {
        let nameNew = `${name}(1)`;
          acc[nameNew] = 0;
          acc[name] = 1;
        return acc;
        } else {
        console.log(i)
          let nameNew = `${name}(${acc[name] + 1})`;
          acc[nameNew] = 0;
        return acc;
        }
      } else {
             acc[name] = 0;
          return acc
      }
  }, {});
  let res = Object.keys(obj);
  return res;
}

module.exports = {
  renameFiles
};
