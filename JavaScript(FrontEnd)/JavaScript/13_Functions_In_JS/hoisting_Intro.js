// Hoisting In JavaScript

/*
    Conclusion Here:
    The Function Declaration is Hoisted
*/

/*

// Accessing function before Initialization :

hello();


// In Case of Function declaration hoisting is working
function hello(){
    console.log("hello world");
}



// In Case of Function expression hoisting is working
// in all case : var, let, const
const hello = function(){
    console.log("hello world");
}
// Error is Thrown : Initialization is After Calling
// here Function is called before it is been intialized 
// and declared

// This is because of Hoisting Concept
// We will learn in Depth afterwards.

*/


/*
// Another Case:

// Accessing var , let and Const before Initialization :


// console.log(hello); // undefined
// var hello = "hello world";
// console.log(hello); // hello world

// console.log(hello); // error: access before initialization
// let hello = "hello world";
// console.log(hello);

// console.log(hello); // error: access before initialization
// const hello = "hello world";
// console.log(hello);

*/