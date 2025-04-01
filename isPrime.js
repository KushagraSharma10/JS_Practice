//  Question : Write a function that will check if number is prime number or not.

function isPrime(num){

    if(num < 0) {
        console.log("Number must be non-negative integer")
        return false;
    }

    if(num === 0 || num === 1){
        return false;
    }

    for(let i = 2; i < Math.sqrt(num); i++){
        if(num % i === 0){
            return false;
        }
        return true;
    }
}

console.log(isPrime(-5)); // true