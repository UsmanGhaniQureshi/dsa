const sumOfContigousTwoNumbers = (arr) => {
  let maxSum = 0;

  for (let i = 0; i < arr.length - 1; i++) {
    maxSum = Math.max(maxSum, arr[i] + arr[i + 1]);
  }
  console.log(maxSum);
};

const slidingWindow = (nums) => {
  let left = 0;
  let right = left + 1;

  let maxSum = 0;
  let arr = [];

  while (left < nums.length - 1) {
    let tempSum = nums[left] + nums[right];
    if (tempSum > maxSum) {
      arr = [nums[left], nums[right]];
      maxSum = tempSum;
    }
    left++;
    right++;
  }
  console.log(arr);
};

slidingWindow([1, 3, 7, 9, 2, 4]);

sumOfContigousTwoNumbers([1, 3, 7, 9, 2, 4]);


// abcbdaac
// l, r , obj ={}

// 
// r = 0 => if(!obj[str[r]]) => obj[str[r]] = r  => obj ={a:0}
// r=1 => obj ={a:0,b:1}
// r=2 => obj ={a:0,b:1,c:2}
// r=3 =>  else => obj[str[r]] > r => l =r-1 ; => obj[str[r]]= r

