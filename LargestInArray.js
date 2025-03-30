function largestInArray(arr){
    let largest = arr[0];
    for(let i = 0; i < arr.length ; i++){
        if(arr[i] > largest){
            largest = arr[i];
        }
    }
    return largest;
}

console.log(largestInArray([1,2,3,14,5]))