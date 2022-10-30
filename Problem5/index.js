// var lengthOfLongestSubstring = (str) => {
//   let count = 0;
//   let maxCount = 0;
//   let obj = {};
//   for (let ch of str) {
//     if (!obj[ch]) {
//       count++;
//       obj[ch] = ch;
//     } else {
//       obj = {
//         [ch]: ch,
//       };
//       count = 1;
//     }
//     maxCount = Math.max(count, maxCount);
//   }
//   console.log(maxCount);
// };

// var lengthOfLongestSubstring = (str) => {
//   let maxCount = 0;
//   let obj = {};
//   let maxArr = [];
//   for (let ch of str) {
//     if (!obj[ch]) {
//       obj[ch] = ch;
//       maxCount++;
//     } else {
//       maxArr.push(Object.keys(obj));
//       obj = {
//         [ch]: ch,
//       };
//     }
//   }

//   let maxLength = 0;

//   for (let i = 0; i < maxArr.length; i++) {
//     maxLength = Math.max(maxLength, maxArr[i].length);
//   }

//   console.log(maxLength);
// };

// RunTime Of the below solution is in between 50-140ms
var lengthOfLongestSubstring1 = (str) => {
  let output = "";
  let maxLength = 0;
  for (let ch of str) {
    let index = output.indexOf(ch);
    if (index === -1) {
      output += ch;
    } else {
      output = output.substring(index + 1, output.length) + ch;
    }
    maxLength = Math.max(maxLength, output.length);
  }
  return maxLength;
};

// RunTime of this solution is over 900ms
var lengthOfLongestSubstring2 = function (s) {
  let maxCount = 0;
  for (let i = 0; i < s.length; i++) {
    let isUnique = true;
    let count = 0;
    let p = i;
    let obj = {};
    while (isUnique && p < s.length) {
      if (!obj[s[p]]) {
        obj[s[p]] = s[p];
        count++;
        p++;
      } else isUnique = false;
      maxCount = Math.max(maxCount, count);
    }
  }
  return maxCount;
};

// Instead of while loop used for loop but the runtime time exceeds, 900-1200ms
var lengthOfLongestSubstring3 = function (s) {
  let maxCount = 0;
  for (let i = 0; i < s.length; i++) {
    let obj = {};
    let count = 0;
    for (let j = i; j < s.length; j++) {
      if (!obj[s[j]]) {
        obj[s[j]] = true;
        count++;
      } else break;
    }
    maxCount = Math.max(maxCount, count);
  }
  return maxCount;
};
// console.log(lengthOfLongestSubstring1("dvdf"));
// console.log(lengthOfLongestSubstring2("dvdf"));
// console.log(lengthOfLongestSubstring1("abcabcbb"));
// console.log(lengthOfLongestSubstring2("abcabcbb"));
// console.log(lengthOfLongestSubstring1(" "));
// console.log(lengthOfLongestSubstring2(" "));
// console.log(lengthOfLongestSubstring1(""));
// console.log(lengthOfLongestSubstring2(""));

// obj ={}
// obj ={a}
// obj ={a,b}
// obj ={a,b,c}
// obj ={a,b,c}   => must store at some place
// obj ={a}
// obj ={a,b}
// obj ={a,b,c}
// obj ={a,b,c} => must store at some place now newObj= {b}
// obj ={b} => must store at some place newObj={b}

// "abcabcbb"
// output =""
// output ="a"
// output ="ab"
// output ="abc"

// const optimizedSolution = (s) => {
//   let left = 0;
//   let right = 0;
//   let obj = {};
//   let longest = 0;

//   while (right < s.length) {
//     if (!obj[s[right]]) {
//       obj[s[right]] = right;
//       longest = Math.max(longest, right - left + 1);
//     } else {
//       obj[s[right]] = right;
//       if (obj[s[right]] > right) {
//         left = obj[s[right]] + 1;
//       }
//     }
//     right++;
//   }
//   console.log(obj);
//   console.log(longest);
// };

// optimizedSolution("abcbdaac");

const optimizedSolution1 = (s) => {
  if (s.length <= 1) return s.length;

  let left = 0;
  let longest = 0;
  const obj = {};

  for (let right = 0; right < s.length; right++) {
    const currentChar = s[right];
    const previousChar = obj[currentChar];

    if (previousChar >= left) {
      left = previousChar + 1;
    }
    obj[currentChar] = right;
    longest = Math.max(longest, right - left + 1);
  }
  return longest;
};

optimizedSolution1("abcbdaac");

const optimizedSolution2 = (s) => {
  if (s.length <= 1) return s.length;

  let left = 0;
  let longest = 0;
  const obj = new Map();

  for (let right = 0; right < s.length; right++) {
    const currentChar = s[right];
    const previousChar = obj.get(currentChar);

    if (previousChar >= left) {
      left = previousChar + 1;
    }
    obj.set(currentChar, right);
    longest = Math.max(longest, right - left + 1);
  }
  return longest;
};

optimizedSolution2("abcbdaac");
