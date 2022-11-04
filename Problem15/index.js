// You are given a large integer represented as an integer array digits,
// where each digits[i] is the ith digit of the integer. The digits are ordered from most significant to
// least significant in left-to-right order. The large integer does not contain any leading 0's.

// Correct Solution
const addOne = (arr) => {
  let carry = 1;
  let output = [];

  for (let i = arr.length - 1; i >= 0; i--) {
    let sum = arr[i] + carry;
    if (sum > 9) carry = 1;
    else carry = 0;
    output.unshift(sum % 10);
  }
  if (carry > 0) output = [1, ...output];
  return output;
};

const addOne2 = (arr) => {
  let loop = true;
  let length = arr.length - 1;
  let carry = 1;

  while (loop && length >= 0) {
    let sum = Number(arr[length]) + carry;
    if (sum > 9) {
      loop = true;
      carry = 1;
    } else {
      loop = false;
      carry = 0;
    }
    arr[length] = sum % 10;
    length--;
  }

  if (carry === 1) arr = [1, ...arr];
  console.log(arr);
};

// Below Solution is Correct but it failed at some point

// Failed At this Point [6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,3]

const addOneWrong = (arr) => {
  const num = Number(arr.join("")) + 1;
  const str = num.toString();
  return str.split("");
};

addOne2([1, 2, 3]);
