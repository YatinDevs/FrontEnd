//interview question
//diff b/w let var and const

//var is old school way of creating variables
//let and const are more strict and introduced in es6

//Scope

//var => function scope
// let and const => block scope
//block {}

// var a = 10;
// {
//     var a = 20;
// }

// console.log(a)

// var a = 10;
// function x() {
//     var a = 20;
// }
// x()
// console.log(a)

// let a = 10;
// {
//     let a = 20;
// }
// console.log(a)

// const a = 10;
// {
//     const a = 20;
// }
// console.log(a)

// let a = 10;
// function x() {
//     let a = 20;
// }
// x()
// console.log(a)

//hoisting

//variables , functions , classes

// console.log(a);
// var a = 100;

// console.log(a); //Reference Error
// let a = 100;

// temporal dead zone => the time or a period before the variable is actually declared
//you cannot access of take reference of the variable

// x()
// function x() {
//     console.log(10)
// }

// let a; //declaration

// a = 10; //intialization
//a = 100

// let a = 10;  //declaration and intialization in same line

//Re-declaration and Re-initialization

// console.log(a)

// var a = 10;

// console.log(a)

// var a = 100;

// console.log(a)

//cannot redclare using let and const

// let a ;

// let a ;

//allows Re-initialization  using let

// let a = 10;
// console.log(a)
// a = 200;
// console.log(a)

//cannot redclare and  Re-initialization  using const

// const a;

// const a;

// const a = 10;

// a = 200;

// console.log(a)

// Uncaught TypeError: Assignment to constant variable.

//dont do this to avoid confusion
// console.log(a)
// window.a = 'John'
