const parseStringToInteger = (s) => {
  let removedSpaces = s.trim();
  let newStringInteger = "";

  let firstChar = removedSpaces.charCodeAt(0);
  if (
    (firstChar >= 48 && firstChar <= 57) ||
    firstChar === 43 ||
    firstChar === 45
  ) {
    for (let i = 0; i < removedSpaces.length; i++) {
      let code = removedSpaces.charCodeAt(i);
      if ((code >= 48 && code <= 57) || code === 43 || code === 45) {
        if (code === 46) break;
        newStringInteger += removedSpaces[i];
      }
    }
    let number = +newStringInteger;
    if (number > 0 && number < 2147483648) return number;
    else if (number < 0 && number > -2147483648) return number;
    else if (number > 0 && number > 2147483648) return 2147483648;
    else return -2147483648;
  } else return 0;
};

console.log(parseStringToInteger("42"));
