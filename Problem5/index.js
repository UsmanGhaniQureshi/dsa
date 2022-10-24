var lengthOfLongestSubstring = (str) => {
  let maxCount = 0;
  let obj = {};
  let maxArr = [];
  for (let ch of str) {
    if (!obj[ch]) {
      obj[ch] = ch;
      maxCount++;
    } else {
      maxArr.push(Object.keys(obj));
      obj = {
        [ch]: ch,
      };
    }
  }

  let maxLength = 0;

  for (let i = 0; i < maxArr.length; i++) {
    maxLength = Math.max(maxLength, maxArr[i].length);
  }

  console.log(maxLength);
};

lengthOfLongestSubstring("pwwkew");

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
