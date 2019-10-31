// --- Directions
// Implement bubbleSort, selectionSort, and mergeSort

export function bubbleSort(arr: number[]) {
  if (!arr.length) {
    return arr;
  }

  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] > arr[j]) {
        const lesser = arr[j];
        arr[j] = arr[i];
        arr[i] = lesser;
      }
    }
  }
  return arr;
}

export function selectionSort(arr: number[]) {
  for (let i = 0; i < arr.length; i++) {
    let indexOfMin = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[indexOfMin]) {
        indexOfMin = j;
      }
    }
    if (indexOfMin !== i) {
      const temp = arr[indexOfMin];
      arr[indexOfMin] = arr[i];
      arr[i] = temp;
    }
  }

  return arr;
}

export function mergeSort(arr: number[]) {
  if (arr.length === 1) {
    return arr;
  }

  const midPointOfArray = Math.floor(arr.length / 2);
  const left = arr.slice(0, midPointOfArray);
  const right = arr.slice(midPointOfArray);

  return merge(mergeSort(left), mergeSort(right));
}

export function merge(left: number[], right: number[]) {
  const results = [];
  while (left.length && right.length) {
    if (left[0] < right[0]) {
      results.push(left.shift());
    } else {
      results.push(right.shift());
    }
  }
  return [...results, ...left, ...right];
}
