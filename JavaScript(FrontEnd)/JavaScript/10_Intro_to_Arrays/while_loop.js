// while loop in array
const fruits=["apple","mango","orange"];
/*
let i=0;
while(i<fruits.length){
    console.log(fruits[i].toUpperCase);
    i++;
}

console.log(fruits);

*/

// for of loop in array

for(let fruit of fruits){
    console.log(fruit);
}

/*
The for...of statement executes a loop that operates on a 
sequence of values sourced from an iterable object. Iterable
 objects include instances of built-ins such as Array, 
 String, TypedArray, Map, Set, NodeList
  (and other DOM collections), as well as the arguments 
  object, generators produced by generator functions, and
   user-defined iterables.
*/

// Incase of For of loop in array data is returned

// for in loop in array

for(let index in fruits){
    console.log(fruits[index]);
}

// Incase of For in loop in array index is returned

/*

The for...in statement iterates over all enumerable 
string properties of an object (ignoring properties keyed 
by symbols), including inherited enumerable properties.

*/