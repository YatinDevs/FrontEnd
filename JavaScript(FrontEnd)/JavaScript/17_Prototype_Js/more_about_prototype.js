

// More about Prototype .

let numbers = [1,2,3,4,5,6];
// numbers.   --> as we use . we get list of methods where does it come from 
// we get it from prototype :\
// Prototype --> we know we find in function
// For make Array like: with help of array constructor AS :
let arr = new Array(2,3,4,65,7);
console.log(numbers);
console.log(arr);
console.log(Array.prototype); // we will get all methods
console.log(Object.getPrototypeOf(numbers)); // we will get all methods

/*
  Prototype Inheritance
All JavaScript objects inherit properties and methods from a prototype:

Date objects inherit from Date.prototype
Array objects inherit from Array.prototype
Person objects inherit from Person.prototype
The Object.prototype is on the top of the prototype inheritance chain:

Date objects, Array objects, and Person objects inherit from Object.prototype.

Adding Properties and Methods to Objects
Sometimes you want to add new properties (or methods) to all existing objects
 of a given type.

Sometimes you want to add new properties (or methods) to an object constructor.
*/
