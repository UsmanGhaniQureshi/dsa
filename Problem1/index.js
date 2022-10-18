// ======================   Array is given, return the indexes of those numbers who adds up to a given target
// Assume that no Duplicate Solution Exist
// No negative values exist
// Numbers are all unique

//Solution 1
const solution1 = (arr, target) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] == target) return [i, j];
    }
  }
  return null;
};

// Solution 2

const solution2 = (arr, target) => {
  for (let i = 0; i < arr.length; i++) {
    const targetNumber = target - arr[i];
    const secondNumberIndex = arr.indexOf(targetNumber, i);
    if (secondNumberIndex > -1) return [i, secondNumberIndex];
  }
  return null;
};

const sol1 = solution1([9, 4, 7, 1, 6, 5], 5);
console.log(sol1);

const sol2 = solution2([9, 4, 7, 1, 6, 5], 5);
console.log(sol2);

// Solution 3

const solution3 = (arr, target) => {
  for (let i = 0; i < arr.length && i !== arr.length; i++) {
    const index2 = arr.findIndex((num) => num === target - arr[i]);
    if (index2 > -1) return [i, index2];
  }
  return null;
};

const sol3 = solution3([9, 4, 7, 1, 6, 5], 5);
console.log(sol3);

// Solution 4

// Failed , this is not going to work => when the object is created it created in the sequence

const solution4 = (arr, target) => {
  const obj = {};
  let indexes = [];

  for (let val of arr) {
    obj[val] = val;
  }
  for (let i = 0; i < arr.length; i++) {
    const numToFound = target - arr[i];
    if (obj[numToFound] == numToFound) {
      indexes = [i, numToFound];
      break;
    }
  }

  const [index1, value2] = indexes;

  const index2 = arr.indexOf(value2);
  if (index2 > -1) return [index1, index2];
  return null;
};

const sol4 = solution4([9, 4, 7, 1, 6, 5], 5);

console.log(sol4);

// This below and above solution may not work when we have duplication

var solution5 = function (nums, target) {
  var obj = {};
  var result = [];
  for (let val of nums) {
    obj[val] = val;
  }

  for (let i = 0; i < nums.length; i++) {
    var numToFind = target - nums[i];
    if (obj[numToFind]) result = [i, numToFind];
  }
  const [index1, value2] = result;
  const index2 = nums.indexOf(value2);
  return [index2, index1];
};

const res5 = solution5([9, 4, 7, 1, 6, 5], 5);
console.log(res5);

var solution6 = function (nums, target) {
  var hashedMap = {};
  for (let i = 0; i < nums.length; i++) {
    const currentMapValue = hashedMap[nums[i]];
    if (currentMapValue >= 0) {
      return [currentMapValue, i];
    } else {
      var numToFind = target - nums[i];
      hashedMap[numToFind] = i;
    }
  }
};
console.log(solution6([9, 4, 7, 1, 6, 5], 5));
