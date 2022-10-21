// Problem 3 Trapping Water

const solution = (arr) => {
  let total = 0;

  for (let i = 0; i < arr.length; i++) {
    let maxLeft = 0;
    let maxRight = 0;
    let currentHeight = arr[i];
    for (let left = i; left >= 0; left--) {
      maxLeft = Math.max(maxLeft, arr[left]);
    }
    for (let right = i; right < arr.length; right++) {
      maxRight = Math.max(maxRight, arr[right]);
    }
    const currentWater = Math.min(maxLeft, maxRight) - currentHeight;
    if (currentWater > 0) total = total + currentWater;
  }
  return total;
};

console.log(solution([4, 2, 0, 3, 2, 5]));

// [4,2,0,3,2,5] Failed this test Case

// t, mL=0 , mR=0

// i=0
//LeftLoop
// left = 0
//rightLoop
// right =0, maxRight =4
// right =1, maxRight =4
// right =2, maxRight =4
// right =3, maxRight =4
// right =4, maxRight =5
// cW = 5-4 =1 so total = 1
// i=1
//LeftLoop
// left = 1 , maxLeft=2
// left = 0 , maxLeft=4

//rightLoop
// right =1, maxRight =5
// cW = 4-4 =0 so total =
// i=2
//LeftLoop
// left = 2 , maxLeft=4

//rightLoop
// right =1, maxRight =5
// cW = 4-0 =0 so total = 1
