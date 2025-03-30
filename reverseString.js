// Question : Write a function that returns the reverse of string 

let str = "function"
function rev(str){
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