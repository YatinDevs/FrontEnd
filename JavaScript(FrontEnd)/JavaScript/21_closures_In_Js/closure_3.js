// function myfunction(power){
//     return function(number){
//         return number ** power
//     }
// }

// const square = myfunction(2);
// const ans = square(3);
// console.log(ans);


// const cube = myfunction(3);
// const ans1 = cube(3);
// console.log(ans1);

function myfunction(power){
    return function(number){
        return number ** power
    }
}

const square = myfunction(2);
const ans = square(3);
console.log(ans);


const cube = myfunction(3);
const ans1 = cube(3);
console.log(ans1);

/*

  JavaScript variables can belong to the local or global scope.

   Global variables can be made local (private) with closures.

  
   A closure is a function having access to the parent scope, 
   even after the parent function has closed.

*/