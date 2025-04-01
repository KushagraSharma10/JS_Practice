// Question write a function that will return the result of raising a given number to a specified power


function pow(base, power) {

    if(power === 0) return 1;
    if(power === 1) return base;

    let result = 1;
    for(let i = 0; i < Math.abs(power); i++){
        result *= base;
    }

    return result;
}

function pow2(base, power) {
    return Math.pow(base, power);  // Using built-in Math.pow() function
}

function pow3(base, power){
    if(power === 0) return 1;
    return base * pow3(base , power - 1);
}

console.log(pow(2, 3)); // 8

console.log(pow2(2, 3)); // 8

console.log(pow3(2, 3)); // 8