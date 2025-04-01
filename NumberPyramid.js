// Question : write a program that prints a number pyramid.

//                1  
//             1  2  1
//          1  2  3  2  1
//       1  2  3  4  3  2  1
//    1  2  3  4  5  4  3  2  1



function numPyramid(num) {
    let result = "";
    for (let i = 1; i <= num; i++) {
        let str = "";
        
        
        for (let space = 1; space <= num - i; space++) {
            str += " "; 
        }
        
      
        for (let j = 1; j <= i; j++) {
            str += j; 
        }
        
      
        for (let k = i - 1; k >= 1; k--) {
            str += k; 
        }
        
        result += str + "\n";
    }
    console.log(result);
}

numPyramid(5);
// numPyramid(5);