// Part 1
// Consist of a string that may contain non-alphatic characters like space, commas etc. remove them and check they are valid palindrone or not

// Solution 1
const validPalindrine1 = (s) => {
  const validString = s.replace(/[^a-z0-9]/gi, "").toLowerCase();
  let leftIndex = 0;
  let rightIndex = validString.length - 1;
  while (leftIndex <= rightIndex) {
    if (validString[leftIndex] !== validString[rightIndex]) return false;
    leftIndex++;
    rightIndex--;
  }
  return true;
};

// Solution 2
const validPalindrine2 = (s) => {
  const validString = s.replace(/[^a-z0-9]/gi, "").toLowerCase();
  return validString.split("").reverse().join("") === validString;
};

console.log(validPalindrine1("A man, a plan, a canal: Panama"));
console.log(validPalindrine2("A man, a plan, a canal: Panama"));

// Problem 2 Check the string is valid palindrone or not after removing a single character
const validPar = (s) => {
  for (let i = 0; i < s.length; i++) {
    const newString = s.slice(0, i) + s.slice(i + 1);
    const reversed = newString.split("").reverse().join("");
    if (newString == reversed) return true;
  }
  return false;
};
