"use strict"; 
//  use strict mode for bettter code
console.log("hello world");
// Intro to variables
// variables can store some information
// we can use information later
// we can change that information late

// declaration of varaible
var  firstName="Yatin";
// use Variable
console.log(firstName);
// change value
firstName ="Mohit";
console.log(firstName);

// rules for namming variables
// 1  you cannot start with numbers
// example :
// 1value (invalid)
// value1 (valid)

var value1=10;
console.log(value1 *10);

// you can use only underscore or dollar syymbol
// valid are:
// first_name  // Snake cASe writing 
// _firstname
// first$name  or $firstname

// you cannot use spaces
// first name (invalid)

// convention
// start with small letter and use camelCase. --> firstName

// let keyword
// declare variable with let keyword

let studentName="Yatin Chaudhari";
studentName="Mohit";
console.log(studentName);

// declare constants
const pi= 3.14;

console.log(pi);

// String Indexing

let name="Chaudhari";

console.log(name[3]);
//lenght of string
// name.length
console.log(name.length);
console.log(name[7]);
console.log(name[name.length-1]);

// Methods of string
// trim()
let firstNamE="   Yatin   ";
console.log(firstNamE);
console.log(firstNamE.length);
firstNamE=firstNamE.trim();
console.log(firstNamE);
console.log(firstNamE.length);
//  toUpperCase()
firstNamE=firstNamE.toUpperCase();
// toLowerCase()
firstNamE=firstNamE.toLowerCase();
// slice

// start index
//end index
let newString=name.slice(3,7);
console.log(newString);

// typeof operator
let age=22;
let str1="Yaas";

console.log(typeof str1);
// convert number to string.
console.log(typeof (age+ " "));
// convert  string to number
let str2=+"23";
console.log(str2);

// string concatenation
let string1="17";
let string2="24";
let newstr=string1 +string2;
let newstr1=+string1+ +string2;
console.log( newstr1);

// template String
let age_ = 22;
let myName="Yatin";
let about_Me="My Name is" + myName + "My age is" + " :"+ age_;
console.log(about_Me);

let aabout_Me=`My Name is ${myName} and My Age is ${age_}`;
console.log(aabout_Me);



// block scope vs function scope(later)


