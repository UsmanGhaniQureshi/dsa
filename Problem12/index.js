// Leet Q # 680. Valid Palindrome II
// Given a string s, return true if the s can be palindrome after deleting at most one character from it.

// Solution 1 time complexity is in square.
const isValid = (s) => {
  for (let i = 0; i < s.length; i++) {
    const newString = s.substr(0, i) + s.substr(i + 1);
    const reversed = newString.split("").reverse().join("");
    if (newString == reversed) return true;
  }
  return false;
};

// Wrong one
const isValid2 = (s) => {
  let start = 0;
  let end = s.length - 1;

  while (start < s.length) {
    let newStr1 = s.substr(0, start) + s.substr(start + 1);
    let newStr2 = s.substr(0, end) + s.substr(end + 1);
    let reversed1 = newStr1.split("").reverse().join("");
    let reversed2 = newStr2.split("").reverse().join("");

    if (newStr1 === reversed1 || reversed2 === newStr2) return true;
    start++;
    end--;
  }
  return false;
};

// The Idea is loop through each character and removed it, after removing check that on reverse it both reversed and after removed a character are equal or not
console.log(isValid("aba"));
console.log(isValid2("aba"));

// This solution is better as compare to others runtime is 80-200ms

const isValid3 = (s) => {
  let start = 0;
  let end = s.length - 1;

  const subPalindrone = (str, st, en) => {
    while (st < en) {
      if (str[st] !== str[en]) return false;
      st++;
      en--;
    }
    return true;
  };

  while (start < end) {
    if (s[start] !== s[end]) {
      return (
        subPalindrone(s, start + 1, end) || subPalindrone(s, start, end - 1)
      );
    }
    start++;
    end--;
  }
  return true;
};

// the below one avg runtime is  400-700ms
const validPalindrome = (s) => {
  for (let i = 0, stop = s.length / 2; i < stop; i++) {
    let j = s.length - i - 1;
    if (s[i] !== s[j]) {
      return isPalindrome(cut(s, i)) || isPalindrome(cut(s, j));
    }
  }
  return true;
};

const cut = (s, i) => s.substr(0, i) + s.substr(i + 1);

const isPalindrome = (s) => s === s.split("").reverse().join("");
console.log(validPalindrome("aba"));
