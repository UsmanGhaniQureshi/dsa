const medianArray = (nums1, nums2) => {
  const sortedArray = [...nums1, ...nums2].sort((a, b) => a - b);
  let length = sortedArray.length;

  if (length % 2 === 0) {
    let index = Math.floor(length / 2) - 1;
    let sum = sortedArray[index] + sortedArray[index + 1];
    console.log(sum, sortedArray[index], sortedArray[index + 1]);
    return sum / 2;
  } else {
    let index = Math.floor(length / 2);
    return sortedArray[index];
  }
};

console.log(medianArray([1, 2], [3, 4]));
