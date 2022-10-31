// a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Every close bracket has a corresponding open bracket of the same type.

//  ================== 63 / 92 test cases passed ==================== Failed Solution
const isValid = (s) => {
  let i = 0;
  let j = i + 1;
  while (i < s.length) {
    if (s[i] === "(") return s[j] === ")";
    else if (s[i] === "[") return s[j] === "]";
    else if (s[i] === "{") return s[j] === "}";
    i += 2;
    j += 2;
  }
};

isValid("{[]}");

// Another
// 36 / 92 test cases passed.

const isValid2 = (s) => {
  let arr = [];

  for (let i = 0; i < s.length; i++) {
    let char = s[i];
    if (char === "(" || char === "{" || char === "[") arr.push(char);
    else if (char === ")" && arr.pop() !== "(") return false;
    else if (char === "}" && arr.pop() !== "{") return false;
    else if (char === "]" && arr.pop() !== "[") return false;
  }
  return arr.length === 0;
};
