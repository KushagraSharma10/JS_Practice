// Question : Write a function that returns the reverse of string 

let str = 12345;
function rev(str){
    if(typeof str !== 'string'){
        throw new Error('Input must be a string');
    }

    
    let reversed = ""
    for(let i = 0; i <str.length; i++){
        reversed = str[i] + reversed;
    }
    return reversed;
}

function rev2(str){
    return str.split('').reverse().join('');
}


console.log(rev(str))
console.log(rev2(str))