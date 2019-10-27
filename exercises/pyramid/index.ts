// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

export function pyramidOld(n) {
  let m = 0;

  let starNumberLower;
  let starNumberHigher;
  if (n % 2 === 0) {
    m = n + 1;
    starNumberLower = 2 * n - 1;
    starNumberHigher = 2 * n + 1;
  } else {
    m = n + 2;
    starNumberLower = 2 * n - 2;

    starNumberHigher = 2 * n + 2;
  }

  console.log("TCL: pyramid -> m", m);
  console.log("TCL: pyramid -> starNumberLower", starNumberLower);
  console.log("TCL: pyramid -> starNumberHigher", starNumberHigher);

  for (let i = 1; i <= n; i++) {
    let pyr = "";
    for (let j = 1; j <= m; j++) {
      const limit = i + j;
      if (limit >= starNumberLower && j < n) {
        pyr += "#";
      } else if (limit <= starNumberHigher && j >= n) {
        pyr += "#";
      } else {
        pyr += " ";
      }
    }
    console.log(pyr);
  }
}

export function pyramid(n) {
  let m = n - 1;
  for (let row = 1; row <= n; row++) {
    let stair = "";
    for (let col = 1; col <= m; col++) {
      if (row + col >= n + 1) {
        stair += "#";
      } else {
        stair += " ";
      }
    }
    console.log(
      stair +
        "#" +
        stair
          .split("")
          .reverse()
          .join("")
    );
  }
}

pyramid(7);
