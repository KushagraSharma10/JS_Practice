// Question: write a function that will swap two numbers with or without third variable.

function swap(a, b) {
    console.log("before swapping [", a,",",b, "]");
    let temp = a;
    a = b;
    b = temp;
    return [a , b];
}

function swap2(a, b){
    console.log("before swapping [", a,",",b, "]");
    a = a + b;
    b = a - b;
    a = a - b;

    return [a, b];
}

function swap3(a, b){
    console.log("before swapping : [", a,",",b, "]");

    a = a ^ b;
    b = a ^ b;
    a = a ^ b;

    
    return [a, b];
}

// console.log(swap(5, 10)); // Output: [10, 5]

// console.log(swap2(5, 10)); // Output: [10, 5]

console.log(swap3(5, 10)); // Output: [10, 5]
