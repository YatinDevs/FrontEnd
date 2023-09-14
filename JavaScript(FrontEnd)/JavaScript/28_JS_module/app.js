/*

What are the benefits of ES6 modules?
Benefits of ES6 Modules

Reusability: By breaking down our code into small, reusable pieces,
 we can use the same module in multiple parts of our application, 
 reducing redundancy and making our codebase more efficient.
  Maintainability: ES6 modules make it easier to maintain our codebase.



*/





/*
// ## ## CASE 1: 

// Consider below variables as:
// Big set of Data and huge functions
const firstName = "Yatin";
const age = "23";


// we called here our data here:
console.log(firstName,age);

*/

/*

// ## ## CASE 2: 

// Lets Say Our set of data and huge functions we want to fetch this function from different
// files :
// utils folder :
// age.js --> age functions and data
// fname.js --> fname functions and data.


import{fname} from './utils/fname.js';
import { age } from './utils/age.js';

// write type = module in script linked to html near defer
// to avoid error --> Cannot use import statement outside a module.
// No need to type defer after we use :  type="module" --> it set defer by default.

console.log(fname,age);

*/

// Case 3 :

// import { Person } from './utils/person.js';
// import  Person  from './utils/person.js'; // importing calling export default syntax
// import  asd  from './utils/person.js'; // importing calling export default syntax
// we can write any meaningful text in it and call through it.

/*
import  Person,{Person2}  from './utils/person.js'; // importing calling export default syntax

const person1 = new Person("Yatin","Chaudhari",24);
console.log(person1);
person1.info();

// const person2 = new asd("Yatin","Chaudhari",24);
// console.log(person2);
// person2.info();


const person3 = new Person2("Yatin","Chaudhari",24);
console.log(person3);
person3.info();

*/

// ---------------------------------------------------------------------------------------------------
import something from './utils/person.js';

console.log(something);