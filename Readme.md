# 📜 JavaScript Practice Questions & Solutions

This document contains **JavaScript questions with detailed solutions**.  
Click on any question to reveal the answer. 🚀  

---

## **1️⃣ Console & Basic Operations (5 Questions)**

<details>
  <summary><strong>1. Log "Hello, JavaScript!" to the console in 3 different ways.</strong></summary>

  ```js
  // Method 1: Using console.log()
  console.log("Hello, JavaScript!");

  // Method 2: Using console.warn()
  console.warn("Hello, JavaScript!");

  // Method 3: Using console.error()
  console.error("Hello, JavaScript!");
  ```
</details>

<details>
  <summary><strong>2. Perform 35 * 2 - (10 / 2) + 7 and log the result.</strong></summary>

  ```js
  let result = 35 * 2 - (10 / 2) + 7;
  console.log(result); // Output: 74
  ```
</details>

<details>
  <summary><strong>3. Log the data type of "123", 123, true, and null using typeof.</strong></summary>

  ```js
  console.log(typeof "123");  // "string"
  console.log(typeof 123);    // "number"
  console.log(typeof true);   // "boolean"
  console.log(typeof null);   // "object" (JavaScript quirk)
  ```
</details>

<details>
  <summary><strong>4. Write a program that swaps the values of two variables.</strong></summary>

  ```js
  let a = 10, b = 20;
  console.log("Before Swap:", "a =", a, ", b =", b);

  // Using a temporary variable
  let temp = a;
  a = b;
  b = temp;
  console.log("After Swap (Method 1):", "a =", a, ", b =", b);

  // Using array destructuring (modern JS)
  [a, b] = [10, 20];
  [a, b] = [b, a];
  console.log("After Swap (Method 2):", "a =", a, ", b =", b);
  ```
</details>

<details>
  <summary><strong>5. Use console.group() to organize logs into a group.</strong></summary>

  ```js
  console.group("User Info");
  console.log("Name: John Doe");
  console.log("Age: 25");
  console.log("City: New York");
  console.groupEnd();

  console.groupCollapsed("Collapsed Group Example");
  console.log("This content is collapsed by default.");
  console.groupEnd();
  ```
</details>

---

## **2️⃣ Variables & Data Types (5 Questions)**

<details>
  <summary><strong>6. Declare a const object, modify its properties, and log the updated object.</strong></summary>

  ```js
  const person = { name: "Alice", age: 25, city: "New York" };
  console.log("Before update:", person);

  // Modifying properties
  person.age = 26;
  person.city = "Los Angeles";

  // Adding a new property
  person.country = "USA";

  console.log("After update:", person);
  ```
</details>

<details>
  <summary><strong>7. Convert "50" (string) into a number using 3 different methods.</strong></summary>

  ```js
  let str = "50";

  // Method 1: Using Number()
  let num1 = Number(str);
  console.log(num1, typeof num1); // 50 "number"

  // Method 2: Using parseInt()
  let num2 = parseInt(str);
  console.log(num2, typeof num2); // 50 "number"

  // Method 3: Using Unary `+` Operator
  let num3 = +str;
  console.log(num3, typeof num3); // 50 "number"
  ```
</details>

<details>
  <summary><strong>8. Check if "JavaScript" contains "Script" without using .includes().</strong></summary>

  ```js
  let str = "JavaScript";

  // Method 1: Using .indexOf()
  console.log(str.indexOf("Script") !== -1); // true

  // Method 2: Using .search()
  console.log(str.search("Script") !== -1); // true
  ```
</details>

<details>
  <summary><strong>9. Create an array of 5 numbers and log the sum using .reduce().</strong></summary>

  ```js
  let numbers = [10, 20, 30, 40, 50];
  let sum = numbers.reduce((acc, num) => acc + num, 0);
  console.log("Sum:", sum); // Sum: 150
  ```
</details>

<details>
  <summary><strong>10. Explain the difference between undefined, null, and NaN with examples.</strong></summary>

  | Concept | Meaning | Example |
  |---------|---------|---------|
  | `undefined` | A variable is declared but not assigned a value | `let x; console.log(x); // undefined` |
  | `null` | Represents an **intentional absence** of a value | `let y = null; console.log(y); // null` |
  | `NaN` (Not a Number) | A result of an invalid math operation | `console.log("hello" / 2); // NaN` |

  ```js
  let a; // Undefined
  console.log(a); // undefined

  let b = null; // Explicitly assigned null
  console.log(b); // null

  let c = "hello" / 2; // Invalid math operation
  console.log(c); // NaN
  console.log(typeof NaN); // "number" (weird JS quirk)
  ```
</details>

---


---

## **3️⃣ Loops (5 Questions)**

**11\. Write a for loop to print numbers from 10 to 1 in reverse.** for (let i \= 10; i \>= 1; i--) {

    console.log(i);

}

**12\. Use a while loop to print multiples of 3 from 3 to 30\.** let num \= 3;

while (num \<= 30\) {

    console.log(num);

    num \+= 3;

}

**13\. Write a program to calculate the sum of numbers from 1 to 100 using a loop.** let sum \= 0;

for (let i \= 1; i \<= 100; i++) {

    sum \+= i;

}

console.log("Sum:", sum); // Output: 5050

**14\. Create a nested loop to print a star pattern.** for (let i \= 1; i \<= 5; i++) {

    let stars \= "";

    for (let j \= 1; j \<= i; j++) {

        stars \+= "\*";

    }

    console.log(stars);

}

**15\. Use a for...of loop to iterate over the string "JavaScript".** let str \= "JavaScript";

for (let char of str) {

    console.log(char);

}

---

## **4️⃣ Arrays (5 Questions)**

**16\. Remove duplicate values from an array.** let arr \= \[1, 2, 3, 2, 4, 3, 5\];

let uniqueArr \= \[...new Set(arr)\];

console.log(uniqueArr); // \[1, 2, 3, 4, 5\]

**17\. Find the second largest number in an array.** function secondLargest(arr) {

    let sorted \= \[...new Set(arr)\].sort((a, b) \=\> b \- a);

    return sorted.length \> 1 ? sorted\[1\] : null;

}

console.log(secondLargest(\[10, 20, 5, 30, 30\])); // Output: 20

**18\. Sort an array in descending order.** let numbers \= \[5, 2, 9, 1, 5, 6\];

numbers.sort((a, b) \=\> b \- a);

console.log(numbers); // \[9, 6, 5, 5, 2, 1\]

**19\. Reverse an array without using .reverse().** function reverseArray(arr) {

    let reversed \= \[\];

    for (let i \= arr.length \- 1; i \>= 0; i--) {

        reversed.push(arr\[i\]);

    }

    return reversed;

}

console.log(reverseArray(\[1, 2, 3, 4\])); // \[4, 3, 2, 1\]

**20\. Find the most frequent element in an array.** function mostFrequent(arr) {

    let freqMap \= {};

    let maxFreq \= 0, mostFrequentNum \= null;

    for (let num of arr) {

        freqMap\[num\] \= (freqMap\[num\] || 0\) \+ 1;

        if (freqMap\[num\] \> maxFreq) {

            maxFreq \= freqMap\[num\];

            mostFrequentNum \= num;

        }

    }

    return mostFrequentNum;

}

console.log(mostFrequent(\[1, 3, 3, 2, 3, 2, 2, 2, 2\])); // Output: 2

---

This document provides **clear explanations** and **collapsible answers** for easy reference. Happy coding! 🚀

