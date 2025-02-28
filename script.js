//  Question no.1 Log "Hello World" to the console in 3 different ways

console.log("Hello World"); // traditional method
console.warn("Hello World")
console.error("Hello World")
console.info("Hello World")
console.table({name: "Kartik", age:22})


// Question no.2 Perform 35 * 2 - ( 10 / 2 ) + 7 and log the result

console.log(35 * 2 - ( 10 / 2 ) + 7) // 72

// Question no.3 log the Data type of "123", 123, true, and null using typeof

console.log(typeof "123") // String
console.log(typeof 123) // Number
console.log(typeof true) // Boolean
console.log(typeof null) // Object --> Reason of null being object is because in JS the type tag of Object is '000' and unfortunately the type tag of null is same as of Object '000' that's why th data type of null is object


// Question no.4 Write a program that swaps the values of two variables

let a = 10;
let b = 20;

// // mathod 1

// [a,b] = [b, a]
// console.log(a,b) // 20 10
let temp;

console.log("Before swapping, a is " + a + " and b is " + b); // Before swapping, a is 10 and b is 20

temp = a;
a = b;
b = temp;

console.log("After swapping, a is " + a + " and b is " + b); // After swapping, a is 20 and b is 10