// Question: Write a function that find all factors of a number.

function factors(num) {
    for (var i = 1; i <= num; i++) {
        if(num % i === 0){
            console.log(i + " is a factor");
        }
    }
}

function factors2(num) {
    let factors = []; 
    for (var i = 1; i <= num; i++) {
        if(num % i === 0){
            factors.push(i);
        }
    }
    return factors;
}


factors(12); // Output: 1, 2, 3, 4, 6, 12

console.log(factors2(12)); // Output: [1, 2, 3, 4, 6, 12]