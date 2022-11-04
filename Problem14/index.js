// Given two binary strings a and b, return their sum as a binary string.

const addBinary = (a, b) => {
  let length = Math.max(a.length, b.length);
  let num1 = a;
  let num2 = b;
  let carry = 0;
  let num = [];

  if (a.length > b.length) {
    for (let i = a.length - b.length - 1; i >= 0; i--) {
      num2 = "0" + num2;
    }
  }
  if (b.length > a.length) {
    for (let i = b.length - a.length - 1; i >= 0; i--) {
      num1 = "0" + num1;
    }
  }

  for (let i = length - 1; i >= 0; i--) {
    let s = Number(num1[i]) + Number(num2[i]) + carry;
    if (s > 1) {
      carry = 1;
    } else carry = 0;
    num.unshift(s % 2);
  }
  if (carry > 0) num = [1, ...num];

  return num.join("");
};

addBinary("1010", "1011");

// 0,1 => 1
// 1,1 => 0
// 1,0 => 0
// 1,1 => 11
