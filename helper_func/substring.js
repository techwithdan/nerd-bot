/**
 *
 * @param {string} string // the string we want to work with
 * @param {string} start // starting position to extract the chars we want
 * @param {number} number // default to 0, unless otherwise specified how many places after the starting position to add
 * @param {number} end // stopping position to grab everything from start to end
 */

function subString(string, start, number = 0, end) {
  return string.substring(string.indexOf(start) + number, end).trim();
}

exports.subString = subString;
