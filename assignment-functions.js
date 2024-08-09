export function capitalize(string) {
  return string[0].toUpperCase() + string.slice(1);
}

export function reverseString(string) {
  let reverseStr = "";
  for (let i = string.length - 1; i >= 0; i--) {
    reverseStr += string[i];
  }

  return reverseStr;
}

export const calculator = {
  add(a, b) {
    return a + b;
  },
  subtract(a, b) {
    return a - b;
  },
  multiply(a, b) {
    return a * b;
  },
  divide(a, b) {
    return a / b;
  },
};

function makeAlphabetArr() {
  return "abcdefghijklmnopqrstuvwxyz".split("");
}

function checkChar(str) {
  const regex = /^[A-Za-z0-9]*$/;
  if (str.match(regex) == null) {
    return true;
  } else {
    return false;
  }
}

export function caesarCipher(string, shiftFactor) {
  let alphaArr = makeAlphabetArr();
  let num = 0;
  let newString = "";
  let cleanString = string.toLowerCase();

  for (let i = 0; i < string.length; i++) {
    if (checkChar(string[i])) {
      newString += string[i];
    } else {
      num = alphaArr.indexOf(cleanString[i]);

      for (let j = 0; j < shiftFactor; j++) {
        if (num >= 25) {
          num = 0;
        } else {
          num++;
        }
      }

      if (string[i] == string[i].toUpperCase()) {
        newString += alphaArr[num].toUpperCase();
      } else if (string[i] == ",") {
        newString += string[i];
      } else {
        newString += alphaArr[num];
      }
    }
  }

  return newString;
}

const object = {
  average: 0,
  min: 0,
  max: 0,
  length: 0,
};

function averageOfArr(arr) {
  let lengthOfArr = arr.length;
  let sum = 0;
  for (let i = 0; i < lengthOfArr; i++) {
    sum += arr[i];
  }
  return sum / lengthOfArr;
}

function min(arr) {
  arr.sort((a, b) => a - b);
  return arr[0];
}

export function analyzeArray(arr, obj = object) {
  obj.average = averageOfArr(arr);
  obj.min = min(arr);
  obj.length = arr.length;
  obj.max = arr[arr.length - 1];
  return obj;
}
