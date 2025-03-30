// Question : Create a function that prints and calculates the sum of digits of a given number

function sumOfDigits(num) {

    if(typeof num !== 'number'){
        console.error('Input must be a number');
        return;
    }

    if(num < 0){
        num = Math.abs(num);
    }

    let sum = 0;
    let temp = num;
    while(temp > 0){
        let lastDigit = temp % 10;
        sum += lastDigit;
        temp = Math.floor(temp / 10);
    }
    return sum;
}


console.log(sumOfDigits(-12345)); // Output: 15

// Explanation:

// The function takes an input number, "num", and initializes a variable, "sum", to keep track of the sum of its digits. It then enters a loop that continues as long as "temp" is greater than 0.

// Inside the loop, it calculates the last digit of "temp" by performing a modulo operation with 10. This gives us the last digit of the number.

// It then adds the last digit to the "sum" variable, and updates "temp" by removing the last digit by performing a floor division operation with 10.


// After the loop finishes, the function returns the final value of "sum", which represents the sum of all the digits in the input number.

// In the given example, when we call the function with the input number 12345, it prints the sum of its digits, which is 15.