// Problem  Number of Steps to Reduce a Number to Zero
// In one step, if the current number is even, you have to divide it by 2, otherwise, you have to subtract 1 from it

const stepsCountToReduceZero = (n) => {
  let n = num;
  let steps = 0;

  while (n !== 0) {
    if (n % 2 === 0) n = n / 2;
    else n = n - 1;
    steps++;
  }

  return steps;
};
