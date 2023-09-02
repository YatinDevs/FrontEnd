/*

 What are array like objects in JavaScript?
An array-like is an object. Has indexed access to the elements 
and a non-negative length property to know the number of elements 
in it. These are the only similarities it has with an array. 
Doesn't have any of the Array methods like push, pop, join, map,etc.


*/

/* Sets (It is Iterable .) */


// 1.stores data (In Linear Order).

// const numbers = new Set([1,2,3,4,5,6,7]);
// console.log(numbers);

// 2.sets also have its own methods

// 3.No index-based access

// const numbers = new Set([1,2,3,3,6,6,7]);
//  console.log(numbers[3]); // undefined
// As there is no index based access ,So point 4.

// 4.order is not guarenteed.

// const numbers = new Set([1,2,3,3,6,6,7]);
// console.log(numbers);

// 5.unique items only (No duplicates allowed).
// const numbers = new Set([1,2,3,3,6,6,7]);
// console.log(numbers);
// Duplicates are ignored one element added only once.


// --------------------------------------------------------------------
/*
// Most common pratice with sets

// We keep set empty while declaration.
const numbers = new Set();

// adding values
numbers.add(1);
numbers.add(2);
numbers.add(2);// No duplicates allowed
numbers.add(3);
// can also add Different datatypes in same Set
const array = ['item1' , 'item2','item3','item4','item5'];

numbers.add(array);
numbers.add(array); // no duplicate
numbers.add(["item1","items2"]);
numbers.add(["item1","items2"]);// here duplicate is added 
// because bracket notation represents new space in memory.
// and each time new array is added.
console.log(numbers);

// ----------------------- Methods in Sets------------------
if(numbers.has(1)){
    console.log("1 is present");
}else{
    console.log("1 is not present");
}

*/
// ---------------------------------------------------------------

// ##  ##  Set are Iterables ##  ## 
// We can use for of loops
const numbers = new Set();
numbers.add(1);
numbers.add(2);
numbers.add(3);
numbers.add(4);
numbers.add(5);
numbers.add(6);
numbers.add(7);
// console.log(numbers);

for(let num of numbers){
    console.log(num);
}


// When to Use Sets 
// When you know you have unique values 
// and not to be repeated.
// For example user Id , any Id .


const myarr = [1,2,4,4,5,6,5,6];

const uniqueElement = new Set(myarr);
console.log(uniqueElement);


console.log(uniqueElement.length);// undefined
console.log(myarr);

let length = 0;
for(let num of uniqueElement){
    length++;   
}
console.log(length);