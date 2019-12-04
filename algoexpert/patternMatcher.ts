//xxyxxy
//gogopowerrangergogopowerranger

//xxx
//hihihi

function patternMatcher(pattern = '', string = '') {
  if (string.length === 0 || pattern.length === 0) {
    return [];
  }
  let patternArray = pattern.split('');
  const stringArray = string.split('');
  let isPatternReversed = false;

  //reverse if pattern not start with x
  if (patternArray[0].toUpperCase() === 'Y') {
    patternArray = patternArray.map(s => {
      if (s === 'x') {
        return 'y';
      } else {
        return 'x';
      }
    });
    //console.log('TCL: patternMatcher -> reversed', patternArray);
    isPatternReversed = true;
  }
  //console.log('TCL: patternMatcher -> patternArray', patternArray);
  //get the count of x and y,
  const charMap = getLenXAndY(patternArray);
  //console.log('===>charMap', charMap);

  if (patternArray.includes('y')) {
    //if pattern has y
    // get the loc of yLoc(index)
    const locOfY = patternArray.indexOf('y');
    for (let len = 1; len <= stringArray.length; len++) {
      const xyArr = getXAndY(len, locOfY, string, charMap);
      //console.log('TCL: patternMatcher -> xyArr', xyArr);
      if (checkIfPatternMatches(xyArr[0], xyArr[1], patternArray, string)) {
        //console.log('Match found');
        if (isPatternReversed) {
          return [xyArr[1], xyArr[0]];
        } else {
          return [xyArr[0], xyArr[1]];
        }
      }
    }
    return [];
  } else {
    for (let len = 1; len <= stringArray.length; len++) {
      const x = string.slice(0, len);
      //console.log('TCL: patternMatcher -> x', x);
      if (checkIfPatternMatches(x, null, patternArray, string)) {
        //console.log('Match found');
        if (isPatternReversed) {
          return ['', x];
        } else {
          return [x, ''];
        }
      }
    }
    return [];
  }
}

function checkIfPatternMatches(x, y, patternArray = [], string) {
  let patternToCheck = '';

  for (let i = 0; i < patternArray.length; i++) {
    if (patternArray[i] === 'x') {
      patternToCheck = patternToCheck + x;
    } else {
      patternToCheck = patternToCheck + y;
    }
  }
  if (patternToCheck === string) {
    return true;
  }
  return false;
}

function getXAndY(xLen, locOfY, string = '', charMap) {
  //YLoc = xLen * yLoc;
  const yIndex = xLen * locOfY;
  //yLen = strLen - no.OfX*LenOfX/no.OfY;
  const yLen = (string.length - charMap['x'] * xLen) / charMap['y'];
  //x = x.slice(0,xLen);
  const x = string.slice(0, xLen);
  const y = string.slice(yIndex, yIndex + yLen);
  return [x, y];
}

function getLenXAndY(patternArray = []) {
  let patternMap = {};
  for (let char of patternArray) {
    if (!(char in patternMap)) {
      patternMap[char] = 1;
    } else {
      patternMap[char]++;
    }
  }
  return patternMap;
}

//patternMatcher('xxyxxy', 'gogopowerrangergogopowerranger');
////console.log('TCL: res', res);
//const res = patternMatcher('yyy', 'hihihi');
const res = patternMatcher('yxyx', 'abab');
//console.log('TCL: res', res);
