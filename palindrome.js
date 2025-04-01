//  Question : write a function that checks if a string is palindrome or not.

function isPalindrome(str) {
  let reverse = "";
  for (let i = 0; i < str.length; i++) {
    reverse = str[i] + reverse;
  }

  if (reverse === str) {
    return true;
  }
  return false;
}

function isPalindrome2(str) {
  for (let i = 0; i < str.length / 2; i++) {
    if (str[i] !== str[str.length - i - 1]) {
      return false;
    }
  }
  return true;
}


function isPalindrome3(str){
  let start = 0;
  let end = str.length - 1;
  for(start, end; start < end; start++ , end--) {
    if(str[start] !== str[end]){
      return false;
    }
  }
  return true;
}

// console.log(isPalindrome("madam")); // true

// console.log(isPalindrome("hello")); // false

// console.log(isPalindrome2("madam")); // true

// console.log(isPalindrome2("hello")); // false

console.log(isPalindrome3("madam")); // true

console.log(isPalindrome3("hello")); // false


