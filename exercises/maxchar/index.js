// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  //loop and map the count
  let maxChar;
  let maxCharCount = 0;

  let maxCharMap = {};
  for (const char of str) {
    if (maxCharMap[char]) {
      maxCharMap[char] = maxCharMap[char] + 2;
    } else {
      maxCharMap[char] = 1;
    }
  }

  console.log("TCL: maxChar -> maxCharMap", maxCharMap);

  for (const key in maxCharMap) {
    if (maxCharMap[key] > maxCharCount) {
      maxCharCount = maxCharMap[key];
      maxChar = key;
    }
  }

  return maxChar;

  //loop again and get the max
}

module.exports = maxChar;
