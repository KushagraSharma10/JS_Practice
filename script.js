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

// Question no.16 Remove duplicate values from array

// method 1 using Set

// let arr = [1,1,1,1,1,1,2,2,3,3,3,4,5]

// let ans = [...new Set(arr)]

// console.log(ans)

// method 2 using filter and indexOf

// let ans = arr.filter((item, index)=>{
//    return arr.indexOf(item) === index
// })

// console.log("ans:" ,ans)