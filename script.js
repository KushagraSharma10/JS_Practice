//  Question no.1 Log "Hello World" to the console in 3 different ways

// console.log("Hello World");
// console.warn("Hello World")
// console.error("Hello World")
// console.info("Hello World")
// console.table({name: "Kartik", age:22})

// Question no.2 Perform 35 * 2 - ( 10 / 2 ) + 7 and log the result

// console.log(35 * 2 - ( 10 / 2 ) + 7) // 72

// Question no.3 log the Data type of "123", 123, true, and null using typeof

// console.log(typeof "123") // String
// console.log(typeof 123) // Number
// console.log(typeof true) // Boolean
// console.log(typeof null) // Object --> Reason of null being object is because in JS the type tag of Object is '000' and unfortunately the type tag of null is same as of Object '000' that's why th data type of null is object

// Question no.4 Write a program that swaps the values of two variables

// let a = 10;
// let b = 20;

// mathod 1

// [a,b] = [b, a]
// console.log(a,b) // 20 10

// method 2
// let temp;

// console.log("Before swapping, a is " + a + " and b is " + b); // Before swapping, a is 10 and b is 20

// temp = a;
// a = b;
// b = temp;

// console.log("After swapping, a is " + a + " and b is " + b); // After swapping, a is 20 and b is 10

// method 3

// a = a+b;
// b = a-b;
// a = a-b;

// console.log(a,b) // 20 10

// question no.5 use console.group() to organise logs into a group

// console.group("Aaj ka hisaab");
// console.log("daal chaawal 50")
// console.log("neebu paani 20")
// console.log("paani puri 40")
// console.groupEnd()

// console.groupCollapsed("Aaj ka hisaab");
// console.log("daal chaawal 50")
// console.log("neebu paani 20")
// console.log("paani puri 40")
// console.groupEnd()

// Question no.6 declare a const object and modify its properties and log the updated object

// const obj = {
//     name: "John",
//     age: 30,
//     city: "New York",
// }

// obj.age = 26

// console.log(obj) // { name: 'John', age: 26, city: 'New York' }

// now the question arises is that the obj is of constant type variable how can we change the values of it then the answer is that in constants we can not change the values but we can modify them

// now if we want that our obj properties should not get changed then we need to use Object.freeze(obj_name)

// Object.freeze(obj)

// obj.age = 27 // This will not change the value

// console.log(obj) // { name: 'John', age: 26, city: 'New York' }

// question no. 7 Convert "53" (String) into number using 3 different methods

// let a = "53";
// let b = 47;

// console.log(+a +b) // using unary + operator
// console.log(Number(a) + b) // using Number() method
// console.log(parseInt(a) + b) // using parseInt() method

// Question no.8 Check if "Javascript" contains "Script" without using .includes()

// let str = "Javascript"

// console.log(str.indexOf("script") !== 1) // true

// if(str.indexOf("script") === -1){
//     console.log(false)
// }else{
//     console.log(true)
// }

// if(str.search("script") === -1){
//     console.log(false)
// }else{
//     console.log(true)
// }

// Question no.9 Create an array of 5 numbers and log the sum using .reduce().

// let arr = [1,2,3,4,5]

// console.log(arr.reduce((acc, curr) => acc + curr)) // 15

// Question no.10 Explain the difference between undefined , null and NaN with examples

// undefined -> Jab variable banaaoge aur value naa do to jo value by default milegi vo hai undefined

// let x;
// console.log(x) // undefined

// null: null ka matlab hai value naa hona

// let y = null
// console.log(y) // null

// NaN: mathematical invalid calculation will get you NaN

// let z = "abc" * 10
// console.log(z) // NaN

// Question no.11 Write a for loop to print numbers from 10 to 1 in reverse.

// for(let i= 10; i>0 ; i--){
//    console.log(i);
// }

// Question no. 12 Use a while loop to print multiples of 3 from 3 to 30;

// let num = 3;

// while (num <= 30) {
//   console.log(num);
//   num += 3;
// }

// Question no. 13 write a program to calculate sum of numbers from 1 to 100 using a loop
// let sum = 0;
// for(let i = 1; i<=100; i++){
//    sum += i;
// }

// console.log(sum)

// Question no. 14 Create a nested loop to print a star pattern
// let output = ""
// for(let i = 1; i<=5; i++){
//     let str = ""
//    for(let j = 1; j<=5; j++){
//       str += "*"
//    }
//    output += str + "\n"

// }
// console.log(output)

// Question no.15 Use a for...of loop to iterate over string "Javascript"

// let str = "Javascript"

// for(let i of str){
//    console.log(i)
// }

// Question no.16 Remove duplicate values from an array

// method 1 using Set

// let arr = [1,1,1,1,1,1,2,2,3,3,3,4,5]

// let ans = [...new Set(arr)]

// console.log(ans)

// method 2 using filter and indexOf

// let ans = arr.filter((item, index)=>{
//    return arr.indexOf(item) === index
// })

// console.log("ans:" ,ans)

// Question no.17 find the second largest element in an array

// var arr = [ 3,1,4,3,1,4,2,5]

// method 1

// unique using Set - [3,1,4,2,5]
// var ans = [...new Set(arr)]

// sort arr in descending order - [5,4,3,2,1]
// var newArr = ans.sort((a,b)=>{
//    return b-a
// })
// 1st arr[1] = 4

// console.log(newArr[1])

// method 2

// function secondLargest(arr){
//    var highest =Math.max(arr[0], arr[1]);
//    var secondHighest =Math.min(arr[0], arr[1]);

//    for(let i = 0; i< arr.length; i++){
//       if(arr[i] > highest){
//          secondHighest = highest;
//          highest = arr[i];
//       }else if(arr[i] < highest && arr[i] > secondHighest){
//          secondHighest = arr[i];
//       }
//    }
//    console.log(highest)
//    console.log(secondHighest)
//   return secondHighest
// }

// secondLargest(arr)

// Question no.18 Sort an array in descending order

// let arr = [3,1,2,5,4];

// let ans = [...arr]

// let sortedArr = ans.sort((a,b)=>{
//    return b-a
// })

// console.log(sortedArr)

// Question no.19 Reverse an array without using .reverse()

// let arr = [1,2,3,4,5]

// function reverseArr(arr){
//    let reversed = []

//    for(let i = arr.length-1; i >=0 ; i--){
//       reversed.push(arr[i])
//    }

//    return reversed
// }

// console.log(reverseArr(arr))

// method 2
// let start, end;
// function reverse(arr,  ){

// }

// Question no.20 Find the most frequent element in an array.
// let arr = [3,4,1,3,4,6,7]
// let obj = {}

// arr.forEach(function(val){
//     obj[val] === undefined ? obj[val] = 1 : obj[val]++;
// })

// console.log(obj)

// Question no.21 write a while loop that logs numbers from 1 to 100 divisible by 5.

// let i = 1;

// while(i<101){
//     if(i % 5 === 0){
//         console.log(i)
//     }
//     i++;
// }

// Question no.22 Use a for... in loop to iterate over and object and log its keys

// let obj = {name: "Kush", age: 20}

// for(let key in obj){
//     console.log(key)
// }

// Question no.23 Create an array of your 5 favorite movies and log it.

// let arr = ["Shawshank Redemption", "The Dark Knight", "KGF", "3-idiots", "John Wick"]

// arr.forEach((item) => console.log(item))

// Question no.24 Add two elements to the start of an array using .unshift()

// let arr = [1,2,3,4,5]

// arr.unshift(10,11)

// console.log(arr)

// Question no.25 Remove the last element of an array and log the updated array

// let arr = [1,2,3,4,5]

// arr.pop()

// console.log(arr)

// Question no.26 use .slice() to extract the first 3 elements of an array

// let arr = [1,2,3,4,5,6];

// let ans = arr.slice(0,3)
// console.log(ans)

// Question no.27 find the index of a specific element in an array using indexOf().

// let arr = [1,2,3,4,5]

// let index = arr.indexOf(3);

// console.log(index) // 2

// Question no.28 Check if a value exists in an array using .includes()

// let arr = [1,2,3,4,5]

// let checkVal = arr.includes(3)

// console.log(checkVal) // true

// Question no.29 sort an array of numbers [5,2,9,1]

// method 1
// let arr = [5, 2, 9, 1];

// arr.sort((a,b) => a-b)

// console.log(arr)

// method 2

// for (let i = 0; i < arr.length - 1; i++) {
//   for (let j = 0; j < arr.length - i - 1; j++) {
//     if (arr[j] > arr[j + 1]) {
//       let temp = arr[j];
//       arr[j] = arr[j + 1];
//       arr[j + 1] = temp;
//     }
//   }
// }

// console.log(arr);


// Question 30. Write a program that creates a copy of an array without mutating the original

// let arr = [11,24,36,4,5]

// method 1 

// let copyArr = [...arr]

// console.log(copyArr)

// method 2

// let arr2 = []

// arr.forEach((value) => arr2.push(value))

// console.log(arr2)

// Question 31. Write a function to check if a number is even or odd.

// function CheckEvenOrOdd(n){
//     return n % 2 === 0 ? "Even" : "Odd";
// }

// console.log(CheckEvenOrOdd(32))

// Question 32. Create a function to calculate the area of circle with a given radius.

// function AreaOfCircle(rad){
//     return (Math.PI * rad * rad).toFixed(2);
// }

// console.log(AreaOfCircle(4))

// Question 33 Write a function that accepts an array and returns the sum of its elements.

// method 1
// function arrSum(arr){
//     let sum = 0
//     arr.forEach((item) => {
//         sum  += item
//     });

//     return sum;
// }

// method 2 using reduce function

// function arrSum(arr){
//     return arr.reduce((acc, item) => {
//         return acc + item
//     },0);

// }

// console.log(arrSum([1,2,3,4,5]))

// Question 34 Create a function that checks if a string starts with a specific character.

// function checkStr(str, char){
//     return str.charAt(0) === char ? true : false;    
// }

// console.log(checkStr("Hello World", "H"))

// Question 35. Write a function to find maximum of two numbers.

// function findMax(a, b){
//     return a> b ? a: b; 
// }

// console.log(findMax(5, 10)) // 10

// Question 36. Create a function that takes a number and return its factorial.

// method 1
// function factorial(n){
//    let fact = 1;
//    for(let i = 1; i<=n; i++){
//        fact *= i;
//    }

//    return fact;
// }

// method 2 using recursion

// function factorial(n){
//    if(n === 0) return 1;
//    else if(n === 1) return n;
//    else return n * factorial(n-1)
//  }

// console.log(factorial(6)) // 120

// Question 37 write a function that accepts a string and return its reverse

// function reverseStr(str){
//     return str.split('').reverse().join('');
// }

// console.log(reverseStr("12345")) // 54321

// Question 38 Create a function to find largest number in the array.

// function LargestNumber(arr){
//     let highest = arr[0];
//     for(let i = 1; i<arr.length; i++){
//         if(arr[i] > highest){
//             highest = arr[i];
//         }
//     }
//     return highest
// }

// console.log(LargestNumber([1, 21, 3]));

// Question 39. Write a function that converts string to Kebab-Case (e.g. "hello world" -> "hello-world").

// function strToKebabCase(str){
    // return str.split(' ').join('-');
//     return str.replace(' ', '-');
// }

// console.log(strToKebabCase("hello world"))

// Question 40. Create a function that logs "Hello World" every time it is called.

// function hello(){
//     console.log("Hello World");
// }

// hello() // Hello World
// hello() // Hello World
// hello() // Hello World

// Question 41. Write a javascript program to check two numbers and return true if one of the number is 100 or if the sum of the two numbers is 100

// function checkNum(a, b){
//     return (a === 100 || b === 100 || a + b === 100) ? true: false;
// }

// console.log(checkNum(50,50))

// Question 42. write a javascript program to get the extension of filename.

// function getExtension(name) {
//     return name.slice(name.lastIndexOf("."))
// }

// console.log(getExtension('example.html')) // .txt

// Question 43. Write a javascript program to replace every character in the string with the character following it in the alphabetic order.

// function replaceChar(str){
//     return str.split('').map((char) => String.fromCharCode(char.charCodeAt(0) + 1)).join('')
// }

// console.log(replaceChar("abcd")) 

// Question 44. write a javascript program to get the current date.

// let date = new Date();

// let day = date.getDate();
// let month = date.getMonth();
// let year = date.getFullYear();

// console.log(`mm-dd-yyyy: ${month}-${day}-${year}`)
// console.log(`dd-mm-yyyy: ${day}-${month}-${year}`)
// console.log(`dd/mm/yyyy: ${day}/${month}/${year}`)
// console.log(`mm/dd/yyyy: ${month}/${day}/${year}`)

// Question 45 write a javascript program to create a new String adding "New!" in the front of a given string. If the given string begins with "New!" already, then return the original string.

// let str = "New! Hello bhai kesa h"

// function addNew(str){
//     if(str.startsWith("New!")) return str
//     return str.split(" ").unshift("New!").join(" ")
// }

// console.log(addNew(str))

// Question 46. Write a javascript program to create a new String from a given string taking first 3 characters and last 3 characters and adding them together. The String length must be 3 or more , if not the original string is returned.

// function NewStr(str){
//     if(str.length < 3) return str
//     return str.slice(0,3) + str.slice(-3);
// }

// console.log(NewStr("JavaScript"))

// Question 47. Write a javascript program to extract the firstHalf of a string of even length.

// function getHalfStr(str){
//     return str.slice(0, Math.floor(str.length / 2))
// }

// console.log(getHalfStr("Doncic"))

// Question 48. Write   a javascript program to concatenate two Strings except their first character.

// function addTwoStr(str1, str2){
//     return str1.slice(1) + str2.slice(1)
// }

// console.log(addTwoStr("Hello","World")) // elloorld

// Question 49. Given two values,  write a javascript program to find out which one is nearest to 100.

// function closeTo100(a, b){
//     return Math.abs(100 - a) < Math.abs(100 - b) ? a : b;
// }

// console.log(closeTo100(105, 90)) 

// Question 50. Write a javascript program to check a given string contains 2 to 4 occurences of a specified character.

// function countChars(str, char){
//     return str.split('').filter(ch => ch === char).length
// }

// function checkStr(str, char){
//     return countChars(str, char) >= 2 && countChars(str, char) <= 4;
// }

// console.log(checkStr("ooh",'o'))
// console.log(checkStr("ooooohhh",'o'))

// Question 51. write a javascript program to find the number of even digits in an array of integers.

// function evenArr(arr){
//     return arr.filter((i) => i % 2 === 0).length
// }

// console.log(evenArr([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])) // [2, 4, 6, 8, 10] so ans is 5 

// Question 52. write a javascript program to check whether a given array of integers is sorted in ascending order.

// function isSorted(arr){
//     for(let i = 0; i < arr.length; i++){
//         if(arr[i] > arr[i+1]) return false
//     }

//     return true
// }

// console.log(isSorted([1, 2, 3, 4, 5])) // true

// Question 53. write a javascript program to find the largest even number from an array of integers.

// function FindLargestEven(arr){
//     let largest = arr[0];
//     for(let i = 1; i < arr.length; i++){
//         if(arr[i] % 2 === 0 && arr[i] > largest){
//             largest = arr[i];
//         }
//     }
//     return largest
// }

// console.log(FindLargestEven([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])) // 10

// Question 54. Write a javascript program to replace the first digit in a string (should contain at least digit) with $ characters.

// function replaceFirstDigit(str){
//     return str.replace(/[0-9]/, "$");
// }

// console.log(replaceFirstDigit("A1bcs23")) // A$bcs23

// Question 55. Given a year , report if the year is leap year or not.

// function isLeapYear(year){
//     return (year % 4 === 0 && year % 100!== 0) || year % 400 === 0 ? "leap year": "Not leap year"
// }

// console.log(isLeapYear(2025)) // false

// Question 56. write a javascript program to compare two objects to determine if the first object contains the same properties as the second object(which may also have additional properties).

// function compareObjects(obj1, obj2){
//     return Object.keys(obj1).every((key) => obj2[key] !== obj1[key])
// }

// let obj1 = {name: "John", age: 30}  
// let obj2 = {name: "kush", age: 26}  
// let obj3 = {name: "John", age: 30, city: "New York"}
// console.log(compareObjects(obj1, obj2)) // true
// console.log(compareObjects(obj1, obj3)) // false


// Question 57. write a javascript program to convert a comma-separated values (CSV) string to 2D array. A new line indicates a new row in the array.


// let str = `abc,def,ghi
// jkl, mno, pqr
// stu, vwx, yza`

// function csvToArray(str){
//     return str.split('\n').map((row)=> row.split(','))
// }

// console.log(csvToArray(str)) // [["abc", "def", "ghi"], ["jkl", "mno", "pqr"], ["stu", "vwx", "yza"]]

// Question 58. write a javascript program to generate a random Hexadecimal color code.

// function getRandomHexColor(){
//     return Math.floor(Math.random() * 16).toString(16);
// }

// function generateRandomColor(){
//     return "#" + Array.from({length : 6}).map(getRandomHexColor).join('')
// }

// console.log(generateRandomColor()) 

// Question 59. write a javascript function that returns a passed string with letters in alphabetical order.

// function sortedStr(str){
//     return str.split('').sort(). join('')
// }

// console.log(sortedStr("webmaster")) // "abeemrstw"


// Closers and HOFs Questions

// Question 60. Create a function that takes another function as an argument and calls it after 3 seconds

// function callFunction(fn){
//     setTimeout(fn, 3000)
// }

// callFunction(function(){
//     console.log("I am called after 3 seconds")
// })

// Question 61. Implement your own version of `.map()` as a higher-order function.


// let arr = [1,2,3,4,5];

// function kap(arr, fn){
//     let newArray = [];
//     for(let i = 0; i < arr.length; i++){
//         newArray.push(fn(arr[i]))
//     }
//     return newArray;
// }

// var ans = kap(arr, function(value){
//     return value + 2;
// })


// console.log(ans) 

// Question 62. Write a function that uses closures to create a counter.

// function counter(){
//     let count = 0;
//     return function(){
//         count++;
//         console.log(count)
//     }

// }

// let ans = counter();
// ans();
// ans();
// ans();

// Question 63. Implement a function that limits how many times another function can be called (Closure + HOF).

// function fnLimiter(fn, limit){
//     let total = 0;
//     return function(){
//         if(total < limit){
//             total++;
//             fn();
//         }
//         else{
//             console.error("Limit reached")
//         }
//     }
// }

// var limit = fnLimiter(function(){
//     console.log("Function called")
// }, 4)

// limit();
// limit();
// limit();
// limit();
// limit();


// back to basic questions 

// Question 64. write a function that tells if a number is even or odd


// function EvenOrOdd(num){
//     return num % 2 === 0 ? "Even" : "Odd"; 
// }

// console.log(EvenOrOdd(5)) // "Odd"
// console.log(EvenOrOdd(2)) // "Odd"
