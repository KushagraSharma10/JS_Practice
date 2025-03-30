// Question: Write a function that calculates the factorial of a number

function factorial(num) {
    
    if(typeof num !== 'number'){
        throw new Error('Input must be a number');
    }

    if(num === 0 || num === 1) {
        return 1;
    }

    let fact = 1;
    for(let i = 2; i <= num; i++) {
        fact *= i
    }

    return fact;
}

console.log(factorial(6));