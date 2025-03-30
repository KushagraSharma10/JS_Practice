
// question 65. write a function that finds and prints the smallest number among 3 given numbers

function smallestNumber(a, b , c){

    if(typeof a === "number" && typeof b === "number" && typeof c === "number"){
        if(a < b && a < c) return a;
        if(b < a && b < c) return b;
        return c;
    }else{
        console.error("All inputs must be numbers");
        return null;
    }

    
}

console.log(smallestNumber("Hello", 3, 3)) // 2