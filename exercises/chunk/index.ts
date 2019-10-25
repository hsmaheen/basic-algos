// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

export function chunk(array, size) {
  const chunkedArray = [];

  let smallChunk = [];

  for (let i = 0; i < array.length; i++) {
    if (smallChunk.length < size) {
      smallChunk.push(array[i]);
    }
    if (smallChunk.length >= size || array.length - 1 === i) {
      chunkedArray.push(smallChunk);
      smallChunk = [];
    }
  }

  return chunkedArray;
}

export function chunkAlternate(array, size) {
  const chunkedArray = [];

  for (const number of array) {
    const last = chunkedArray[chunkedArray.length - 1];

    if (!last || last.length === size) {
      chunkedArray.push([number]);
    } else {
      last.push(number);
    }
  }

  return chunkedArray;
}

export function chunkUsingSlice(array: Array<number>, size: number) {
  const chunkedArray = [];
  let j = 0;

  let index = 0;

  while (index < array.length) {
    chunkedArray.push(array.slice(index, index + size));
    index = index + size;
  }

  return chunkedArray;
}
