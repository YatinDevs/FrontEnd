// Introduction to arrays
// Reference Type
// How to create arrays

// Arrays --------> Ordered Collection of Items

let fruits = ["apple","mango","grapes"];
let numbers= [1,2,3,4,5];
let mixed= [1,2,3.3,"String",null,undefined];


console.log(typeof mixed);
console.log(mixed);

console.log(fruits);
console.log(fruits[1]="banana");
console.log(fruits);

console.log(Array.isArray(fruits));

let obj={}; //object literal

// array push pop
// array shift
// arrays are mutable

fruits.push("Mango");// adds to last of array
console.log(fruits);
fruits.pop(); // removes from last and saves it
console.log(fruits);
console.log(fruits.pop()); // gives the last Element which is to be removed

// unshift
fruits.unshift("pineapple"); // adds to the front
console.log(fruits);

// shift 
let removedfruit=fruits.shift(); // removes item from front
console.log(fruits);
console.log(removedfruit);

// push pop fast
// shift unshift slow

// Array Indexing