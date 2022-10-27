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

var lengthOfLongestSubstring = (str) => {
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
  console.log(maxLength);
};

lengthOfLongestSubstring("dvdf");

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
