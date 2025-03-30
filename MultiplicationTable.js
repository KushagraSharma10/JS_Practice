// Question: create a function that will generate a multiplication table of a given number.

function multiTable(num){
    for(let i = 1; i <= 10; i++){
        console.log(`${num} x ${i} = ${num * i}`);
    }   
}


multiTable(5);