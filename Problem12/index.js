// Leet Q # 680. Valid Palindrome II
// Given a string s, return true if the s can be palindrome after deleting at most one character from it.

// Solution 1 time complexity is in square.
const isValid = (s) => {
  for (let i = 0; i < s.length; i++) {
    const newString = s.slice(0, i) + s.slice(i + 1);
    const reversed = newString.split("").reverse().join("");
    if (newString == reversed) return true;
  }
  return false;
};
// The Idea is loop through each character and removed it, after removing check that on reverse it both reversed and after removed a character are equal or not
console.log(isValid("abca"));
