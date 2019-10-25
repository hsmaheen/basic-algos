// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

export function reverseSimple(str: string) {
  return str
    .split("")
    .reverse()
    .join("");
}

export function reverseUsingArray(str: string) {
  const strArr = str.split("");
  let returnString = "";

  for (const char of strArr) {
    returnString = char + returnString;
  }
  return returnString;
}

export function reverseWithoutArray(str: string) {
  let returnString = "";

  for (const char of str) {
    returnString = char + returnString;
  }
  return returnString;
}

export function reverse(str: string) {
  let returnString = "";

  for (const char of str) {
    returnString = char + returnString;
  }
  return returnString;
}
