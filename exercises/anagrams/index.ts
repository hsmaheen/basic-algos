// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

export function anagrams(stringA: string, stringB: string) {
  const justStringA = stringA.replace(/[^\w]/g, "").toLowerCase();
  console.log("TCL: anagrams -> justStringA", justStringA);
  const justStringB = stringB.replace(/[^\w]/g, "").toLowerCase();
  console.log("TCL: anagrams -> justStringB", justStringB);

  if (justStringA.length !== justStringB.length) {
    return false;
  }

  const stringA_Map = {};
  const stringB_Map = {};

  for (const char of justStringA) {
    if (!stringA_Map[char]) {
      stringA_Map[char] = 1;
    } else {
      stringA_Map[char]++;
    }
  }

  for (const char of justStringB) {
    if (!stringB_Map[char]) {
      stringB_Map[char] = 1;
    } else {
      stringB_Map[char]++;
    }
  }

  for (const key in stringA_Map) {
    if (stringA_Map[key] !== stringB_Map[key]) {
      return false;
    }
  }
  return true;
}
