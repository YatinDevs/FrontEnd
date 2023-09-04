// Hoisting In JavaScript :

/*
var a; //undefined 

var a=10;
console.log(a);
var a=20; 


console.log(b);// reference error hoisting not work in case of let and const
let b=30;
*/


console.log("I am a "+ job);
var job = "Web Developer";
console.log("I am a "+ job);

function whoAmI(){
    
console.log("I am a "+ job);
   var job = "Full Stack";
console.log("I am a "+ job);
}

whoAmI();


/*
 Hoisting In Java Script Is Default Behaviours of moving declaration to the top of scope.

 In Java Script A variable can be declared after it has been used.
 In Other words: a variable can be used before it has been declared.

 Hoisting is JavaScript's default behavior of moving all declarations to the top of the
  current scope (to the top of the current script or the current function).

 Variables defined with let and const are hoisted to the top of the block,
  but not initialized.

*/

// 