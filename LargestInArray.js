function largestInArray(arr){

    if(!arr || arr.length === 0){
        throw new Error('Input array is empty');
    } 

    let largest = arr[0];
    for(let i = 0; i < arr.length ; i++){
        if(arr[i] > largest){
            largest = arr[i];
        }
    }
    return largest;
}

function largestInArray2(arr){
    return Math.max(...arr);
}

console.log(largestInArray([1,2,3,14,5]))

console.log(largestInArray2([1,2,3,14,5]))