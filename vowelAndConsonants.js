//  Question : Write a function that counts and prints the number of vowel and consonants in a given String.

function countVowAndConso(str){
    let vowelCount = 0;
    let consoCount = 0;

    str = str.toLowerCase();
    for(let i = 0; i < str.length; i++){
        if(str[i] === 'a' || str[i] === 'e' || str[i] === 'i' || str[i] === 'o' || str[i] === 'u'){
            vowelCount++;
        } else if(str[i] >= 'a' && str[i] <= 'z'){
            consoCount++;
        }
        else{
            continue;
        }
    }
    console.log("Number of vowels: " + vowelCount);
    console.log("Number of consonants: " + consoCount);
}

countVowAndConso("Hello World"); // Output: Number of vowels: 3, Number of consonants: 9