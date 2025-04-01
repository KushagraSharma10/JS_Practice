// Question : write a program that prints numbers from 1 to N, replacing
// 1) multiples of 3 with "Fizz"
// 2) multiples of 5 with "Buzz"
// 1) multiples of both 3 & 5 with "FizzBuzz"

function fizzBuzz(n) {
  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("FizzBuzz");
    } else if (i % 5 === 0) {
      console.log("Buzz");
    } else if (i % 3 === 0 ) {
      console.log("Fizz");
    }
    else{
        console.log(i);
    }
    console.log("\n");
  }
}

fizzBuzz(20);
