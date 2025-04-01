// Question : write a program that counts the occurrence of each character in string.


function occurrence(str) {
  let charCount = {};

  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (charCount[char]) {
      charCount[char]++;
    } else {
      charCount[char] = 1;
    }
  }
  return charCount;
}


console.log(occurrence("Hello World")); // Output: { h: 1, e: 1, l: 3, o: 2, ' ': 1, W: 1, r: 1, d: 1 }
