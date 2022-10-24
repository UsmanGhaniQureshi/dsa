// Typed Out String

const typedOutString = (str1, str2) => {
  const result1 = [];
  const result2 = [];

  for (let i = 0; i < str1.length; i++) {
    if (str1[i] === "#") result1.pop();
    else result1.push(str1[i]);
  }
  for (let i = 0; i < str2.length; i++) {
    if (str2[i] === "#") result2.pop();
    else result2.push(str2[i]);
  }
  if (result1.length !== result2.length) return false;
  return result1.join("") === result2.join("");
};

const typedOutString3 = (str1, str2) => {
  const result1 = [];
  const result2 = [];

  for (let ch of str1) ch === "#" ? result1.pop() : result1.push(ch);
  for (let ch of str2) ch === "#" ? result2.pop() : result2.push(ch);

  if (result1.length !== result2.length) return false;
  return result1.join("") === result2.join("");
};

// Below Solution failed on "ab##" "c#d#"
// Well it will be a blunder if i used object here, because if i dynamically
//create object then the key will be alphabatically and thats the reason this solution is not going to work out
const typedOutString2 = (s, t) => {
  const obj1 = {};
  const obj2 = {};

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "#") {
      delete obj1[s[i - 1]];
    } else obj1[s[i]] = s[i];
  }
  for (let i = 0; i < t.length; i++) {
    if (t[i] === "#") {
      delete obj2[t[i - 1]];
    } else obj2[t[i]] = t[i];
  }
  return Object.keys(obj1).join("") === Object.keys(obj2).join("");
};

// Optimized Solution

const optimized = (s, t) => {
  let p1 = s.length - 1;
  let p2 = t.length - 1;

  while (p1 >= 0 || p2 >= 0) {
    if (s[p1] === "#" || t[p2] === "#") {
      if (s[p1] === "#") {
        let backCounter = 2;
        while (backCounter > 0) {
          p1--;
          backCounter--;
          if (s[p1] === "#") backCounter += 2;
        }
      }

      if (t[p2] === "#") {
        let backCounter = 2;
        while (backCounter > 0) {
          p2--;
          backCounter--;
          if (t[p2] === "#") backCounter += 2;
        }
      }
    } else {
      if (t[p2] !== s[p1]) return false;
      p1--;
      p2--;
    }
  }
  return true;
};

console.log(optimized("ab#z", "az#z"));
console.log(optimized("abc#d", "acc#c"));
console.log(optimized("x#y#z#", "a#"));
console.log(optimized("a###b", "b"));
console.log(optimized("Ab#z", "az#z"));

// Reversing A String Another poblem

const reversedInteger = (x) => {
  let str;
  let reversedNumber;
  let reversed;
  if (x > 0) {
    str = x.toString();
    reversed = str.split("").reverse().join("");
    reversedNumber = Number(reversed);
  } else {
    str = Math.abs(x);
    str = str.toString();
    reversed = str.split("").reverse().join("");
    reversedNumber = -1 * Number(reversed);
  }

  console.log(reversedNumber);
};

reversedInteger(-321);


// https://leetcode.com/problems/remove-all-adjacent-duplicates-in-string/