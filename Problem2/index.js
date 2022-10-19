// Container With Most Water

const solution1 = (arr) => {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      const smallestNumber = Math.min(arr[i], arr[j]);
      const indexDiff = j - i;
      const area = smallestNumber * indexDiff;
      result.push({
        firstNumber: arr[i],
        secondNumber: arr[j],
        area,
      });
    }
  }
  result.sort((a, b) => b.area - a.area);
  const nums = result[0];
  const { firstNumber, secondNumber } = nums;
  return [firstNumber, secondNumber];
};
console.log(solution1([1, 7, 2, 0, 1, 3]));

const solution1OP = (arr) => {
  let area = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      const smallestNumber = Math.min(arr[i], arr[j]);
      const indexDiff = j - i;
      const tempArea = smallestNumber * indexDiff;
      if (tempArea > area) {
        area = tempArea;
      }
    }
  }
  return area;
};
console.log(solution1OP([1, 5, 4, 3]));

// Time complexity of both solution is O of square and will increase if array size increased
