// rest parameters : 
/*
function myfunction(a,b,c){
    console.log(`a  is ${a}`);
    console.log(`b  is ${b}`);
    console.log(`c  is ${c}`);
}

myfunction(1,3,4);
// printed avaiable parameters
myfunction(1,3,4,4,56,346,34,3,3);
// here rest parameters are not printed
// how to handle them
*/

/*

// Handling above condition with rest parameters

// Used Rest parameter to get rest parameters 
// in form of array which was ignored before
function myfunction(a,b,...c){
    console.log(`a  is ${a}`);
    console.log(`b  is ${b}`);
    console.log(`c  is ${c}`);
}

myfunction(1,3,4);
myfunction(1,3,4,4,56,346,34,3,3);

*/

// Rest Parameter is used
const addAll = (...numbers) =>{
    
    let total = 0;
   
    for(let num of numbers){

        total = total + num;
    }

    return total;
    
}
const ans = addAll(1,2,3,4,5,6,7,8,9,10);
console.log(ans);

/*
The rest parameter syntax allows a function to accept an
 indefinite number of arguments as an array, providing a 
 way to represent variadic functions in JavaScript.

*/