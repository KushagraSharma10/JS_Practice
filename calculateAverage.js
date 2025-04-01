//  Question: write a function that prints and returns the average of set of numbers

function average(arr){
    let sum = SumOfArray(arr);
    let Average = (sum / arr.length);
    const formattedAverage = 
    Average % 1 === 0 || Average.toFixed(2) == Average 
        ? Average.toString() 
        : Average.toFixed(2);
    console.log("Average is: ", formattedAverage);
    return formattedAverage;
}


function SumOfArray(arr) {
    return arr.reduce((acc, num) => acc + num, 0);
}

// console.log(SumOfArray([1,2,3,4,5]))

console.log(average([1,2,3,4,5, 6, 10])) // output: 3.0