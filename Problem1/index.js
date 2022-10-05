// ======================   Array is given, return the indexes of those numbers who adds up to a given target

//Solution 1
const solution1 = (arr, target) => {
  // Length must be greater than two and if two  just add them to check they equal to target or not
  const result = [];
  if (arr.length === 2 && arr[0] + arr[1] === target) {
    result.push({
      firstIndex: 0,
      secondIndex: 1,
    });
    return;
  }
  for (let i = 0; i < arr.length; i++) {
    if (i === arr.length) return;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === target)
        result.push({
          firstIndex: i,
          secondIndex: j,
        });
    }
  }
  if (result.length === 0)
    return "Not able to find two numbers whose sum is = " + target;
  return result;
};

// Solution 2

const solution2 = (arr, target) => {
  const result = [];
  if (arr.length === 2 && arr[0] + arr[1] === target) {
    result.push({
      firstIndex: 0,
      secondIndex: 1,
    });
  }

  for (let i = 0; i < arr.length; i++) {
    const targetNumber = target - arr[i];
    const secondNumberIndex = arr.indexOf(targetNumber, i);
    if (secondNumberIndex > -1) {
      result.push({
        firstIndex: i,
        secondIndex: secondNumberIndex,
      });
    }
  }
};

const sol1 = solution1([1, 3, 7, 9, 2], 11);
console.log(sol1);

const sol2 = solution1([1, 3, 7, 9, 2], 11);
console.log(sol2);

// Problem is Same but now we only have to return the first match and assume that pnly two numbers add ti give up the target

// Solution 3

const solution3 = (arr, target) => {
  if (arr.length < 2) return null;
  else if (arr[0] + arr[1] === target) return [0, 1];
  else {
    for (let i = 0; i < arr.length && i !== arr.length; i++) {
      const index2 = arr.findIndex((num) => num === target - arr[i]);
      if (index2 > -1) return [i, index2];
    }
  }
  return null;
};

const sol3 = solution3([1, 3, 7, 9, 2], 11);
console.log(sol3);
