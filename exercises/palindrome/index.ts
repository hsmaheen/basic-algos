// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

export function palindromeSimple(str: string): boolean {
  const reversedString = str
    .split("")
    .reverse()
    .join("");

  if (str === reversedString) {
    return true;
  }
  return false;
}

export function palindromeArray(str: string): boolean {
  let reversedString = "";
  for (const char of str) {
    reversedString = char + reversedString;
  }
  if (str === reversedString) {
    return true;
  }
  return false;
}

//compare only till half the length
export function palindrome(str: string): boolean {
  const splitArray = str.split("");

  let response = false;
  splitArray.forEach((char, i) => {
    const compareLength = str.length - i - 1;

    if (i === str.length % 2) {
      return (response = char === str[compareLength]);
    }
    response = char === str[compareLength];
  });

  return response;
}
