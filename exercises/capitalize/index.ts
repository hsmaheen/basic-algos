// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

export function capitalizeBrute(strArray: string) {
  let newWord = "";
  let isNextEmpty = false;
  for (let i = 0; i < strArray.length; i++) {
    if (i === 0) {
      newWord = newWord + strArray[i].toUpperCase();
    } else if (strArray[i] === " ") {
      isNextEmpty = true;
      newWord = newWord + strArray[i];
      continue;
    } else if (isNextEmpty) {
      newWord = newWord + strArray[i].toUpperCase();
      isNextEmpty = false;
    } else {
      newWord = newWord + strArray[i];
    }
  }

  return newWord;
}

export function capitalizeUsingArray(str: string) {
  let newWord = [];
  const strArray = str.split(" ");

  for (const word of strArray) {
    newWord.push(word[0].toUpperCase() + word.slice(1));
  }

  return newWord.join(" ");
}

export function capitalize(strArray: string) {
  let newWord = strArray[0].toUpperCase();
  for (let i = 1; i < strArray.length; i++) {
    if (strArray[i - 1] === " ") {
      newWord += strArray[i].toUpperCase();
      continue;
    } else {
      newWord += strArray[i];
    }
  }

  return newWord;
}
