// Question : Write a function that Count and returns number of words in a sentence.


function noOfWords(sentence){
    if(typeof sentence!=='string'){
        throw new Error('Input must be a string');
    }

    return sentence.split(' ').length;
}


console.log("No of Words in sentence are : " , noOfWords("This is a sentence")); // Output: 2