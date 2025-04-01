//  Question: write a function that calculates and returns the simple interest on given loan amount

function simpleInterest(principal, rate, time) {
    return ((principal * rate * time) / 100).toFixed(2);  
}

console.log(simpleInterest(1000, 5, 2)); // Output: 100.00