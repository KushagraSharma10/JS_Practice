// Question : Create a function that will tell if a year is leap year or not.

function  isLeapYear(year){

    if(typeof year !== 'number'){
        console.log("Invalid input. Please enter a valid year.");
        return; 
    }

    if(year < 0){
        console.log("Invalid input. Year cannot be negative.");
        return;
    }

    if((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
        return true;
    }
    return false; 
}

console.log(isLeapYear(2024)); // Expected output: Leap Year