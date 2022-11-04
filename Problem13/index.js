// Problem given two array
// Input: l1 = [2,4,3], l2 = [5,6,4]
// Output: [7,0,8]
// Input: l1 = [0], l2 = [0]
// Output: [0]

// Input: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
// Output: [8,9,9,9,0,0,0,1]
var addTwoNumbers = function (arr1, arr2) {
  let carry = 0;
  let output = [];
  let length = Math.max(arr1.length, arr2.length);
  for (let i = 0; i < length; i++) {
    let sum = 0;
    if (i < arr2.length) {
      sum = arr1[i] + arr2[i] + carry;
      if (sum < 10) {
        output.push(sum);
      } else {
        carry = 1;
        output.push(sum % 10);
      }
    } else {
      sum = arr1[i] + carry;
      if (sum < 10) {
        output.push(sum);
      } else {
        carry = 1;
        output.push(sum % 10);
      }
      if (i === arr1.length - 1 && carry === 1) output.push(1);
    }
  }
  return output;
};

console.log(addTwoNumbers([2, 4, 3], [5, 6, 4]));
console.log(addTwoNumbers([0], [0]));
console.log(addTwoNumbers([9, 9, 9, 9, 9, 9, 9], [9, 9, 9, 9]));
