// Question: write a function that will check if the number is armstrong or not.


function armstrong(num){
    let temp = num;
    let sum = 0;
    let length = num.toString().length;
    while(temp > 0){
        let lastDigit = temp % 10;
        // let sol = 1;
        // for(let i = 1; i <= length; i++) {
        //     sol *= lastDigit;
        // }

        let sol = Math.pow(lastDigit, length);
       console.log(sol)
        sum += sol; 
        temp = Math.floor(temp / 10);
    }
    console.log(sum, num);

    return sum === num;
}

// console.log(armstrong(153)); // true

console.log(armstrong(123)); // false