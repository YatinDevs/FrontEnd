// ####################### typeof operator ###############
/*
What is typeof in JavaScript?
Typeof in JavaScript is an operator used for type checking 
and returns the data type of the operand passed to it.
*/ 

// Data types

// # Primitive Data Types

// string "abcd"
// number 2,3,4,5.6
// booleans
// undefined
// null
// BigInt
// Symbol


let age = 22;
let name = "abcdef";

// console.log(typeof age); // number
// console.log(typeof name); // string


// ######### Convert number to string ###################


// console.log(typeof age); // number
// // after Converting number to string
// console.log(typeof(age + "")); // string

// age = age + "";
// console.log(typeof age); // string

// // ------------------------------------------------------------
// // Other way :

// let num = 18;
// num = String(num);
// console.log(typeof num);

// ############### Convert String to number ##############

let myStr = +"3";
console.log(typeof myStr); 

// ------------------------------------------------------------
// Other way :

let age1 ="18";
age1 =Number(age1);
console.log(typeof age1);


