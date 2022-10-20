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

// Time complexity of both solution is O of square and will increase if array size increased

const optimizedSolution = (arr) => {
  let left = 0;
  let right = arr.length - 1;
  let area = 0;

  while (left < right) {
    const tempArea = Math.min(arr[left], arr[right]) * (right - left);
    area = Math.max(area, tempArea);
    if (arr[left] < arr[right]) {
      left++;
    } else right--;
  }
  return area;
};

console.log(optimizedSolution([1, 8, 6, 2, 5, 4, 8, 3, 7]));

// key points => the value at the index left is less than right => increment by 1 on left side
// and if the value is greater at the right then decrement right by one
// Technique used to optimize this problem is called TWO SHIFTING POINTER