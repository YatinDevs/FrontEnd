// Arrays Destructing
/* 
The destructuring assignment syntax is a JavaScript
expression that makes it possible to unpack values from 
arrays, or properties from objects, into distinct variables.

In Other words, Array Destructing Is :
We Unpack whole array which is huge with data
And 
data can be values or properties
from
arrays or objects respectively

we assign it to distinct particular variables.

*/

// Basic Destructing Array
// const myarr = ["value1","value2"];

// let var1= myarr[0];
// let var2= myarr[1];

// console.log(var1);
// console.log(var2);


/*
// Other way of Destructing Array in JS.

const myarr = ["value1","value2"];

let[var1,var2]=myarr;

console.log(var1);
console.log(var2);
*/

/*
// In case of let var destructuring
const myarr = ["value1","value2"];

let[var1,var2]=myarr;
var1 ="changing value"; 
// Array is Destructed and stored in variables
// and variable act similar to normal var
console.log(var1);
console.log(var2);

*/

/*

// In case of Const var destructuring
const myarr = ["value1","value2"];

const[var1,var2]=myarr;
// var1 ="changing value"; 
// cannot change const var acts similar to normal var

// Array is Destructed and stored in variables
// and variable act similar to normal var
console.log(var1);
console.log(var2);
*/

// ##################### Cases ########################
/*

// case 1

const myarr = ["value1","value2","value3"];

const[var1,var2]=myarr;
// var1 ="changing value"; 
// cannot change const var acts similar to normal var

// Array is Destructed and stored in variables
// and variable act similar to normal var
console.log(var1);
console.log(var2);

*/

/*
// case 2

// only one in array
// 3 variable
// 1 will be assigned rest undefined

const myarr = ["value1"];

const[var1,var2,var3]=myarr;


// Array is Destructed and stored in variables
// and variable act similar to normal var
console.log(var1);
console.log(var2);
console.log(var3);

*/


/*
// case 3

const myarr = ["value1","value2","value3","value4","value5"];

// Skipping value 2 and value 4 for assigning
const[var1,,var2,,var3]=myarr;
// var1 ="changing value"; 
// cannot change const var acts similar to normal var

// Array is Destructed and stored in variables
// and variable act similar to normal var
console.log(var1);
console.log(var2);
console.log(var3);

*/


// // you want to store rest remaining values in array
// //  Below method is Basic 
// const myarr = ["value1","value2","value3","value4","value5"];

// const[var1,var2,var3]=myarr;
// const newarr=myarr.slice(3);

// // Array is Destructed and stored in variables
// // and variable act similar to normal var
// console.log(var1);
// console.log(var2);
// console.log(var3);

// console.log(newarr);

// Other way to store rest remaining values in array

const myarr = ["value1","value2","value3","value4","value5"];
// with help of spread operator
const[var1,var2,var3,...newarr]=myarr;

// Array is Destructed and stored in variables
// and variable act similar to normal var
console.log(var1);
console.log(var2);
console.log(var3);
console.log(newarr);
