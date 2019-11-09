const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log("====> ans", arr);
let ans = lefRotateArray(arr, 3);
console.log("====> ans", ans);

function lefRotateArraySimple(arr = [], n) {
  while (n > 0) {
    const ele = arr.shift();
    arr.push(ele);
    n--;
  }
  return arr;
}

function gcd(a, b) {
  if (a === 0) {
    return b;
  }
  return gcd(b % a, a);
}

function lefRotateArray(arr = [], rotations) {
  let i = 0;
  let j = 0;
  let counter = 0;
  const length = arr.length;

  const sets = gcd(length, rotations);
  console.log("TCL: lefRotateArray -> arr", arr);
  console.log("TCL: lefRotateArray -> length", length);
  console.log("TCL: lefRotateArray -> rotations", rotations);
  console.log("TCL: lefRotateArray -> sets", sets);

  for (i = 0; i < sets; i++) {
    j = i;
    counter = (j + rotations) % length;
    const temp = arr[i];

    while (counter !== i) {
      arr[j] = arr[counter];
      j = counter;
      counter = (j + rotations) % length;
    }
    if (counter == i) {
      arr[j] = temp;
    }
  }

  return arr;
}
