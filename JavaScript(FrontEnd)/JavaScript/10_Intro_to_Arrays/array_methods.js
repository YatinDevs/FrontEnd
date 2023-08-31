
//---------------------------------------------------------------
// to check Array we use isArray

let fruits = ["apple","mango","grapes"];

console.log(typeof fruits);
console.log(Array.isArray(fruits));

/*
What is isArray in JavaScript?
JavaScript Array.isArray()

The isArray() method returns true if an object is an array, otherwise false .

*/

/*
Why we use isArray in JavaScript?
isArray() method determines whether the value passed to this
 function is an array or not. This function returns true if
the argument passed is an array else it returns false

*/
//---------------------------------------------------------------

// array push pop
// array is mutable

/*
What is push in JavaScript?
Description. The push() method adds new items to the end 
of an array. The push() method changes the length of the 
array. The push() method returns the new length.
*/
// push
fruits.push("banana");
console.log(fruits);

//---------------------------------------------------------------

//pop
/*
What is pop in JavaScript?
The pop() method removes the last element from an array and
 returns that value to the caller. If you call pop() on an 
 empty array, it returns undefined . Array.prototype.shift()
 has similar behavior to pop() , but applied to the first
  element in an array. The pop() method is a mutating method.

*/
let poppedelement=fruits.pop();
console.log(fruits);
console.log(poppedelement);
//---------------------------------------------------------------
// unshift

fruits.unshift("banana");
fruits.unshift("myfruit");
console.log(fruits);


// shift


let shiftedele = fruits.shift();
console.log(fruits);
console.log(shiftedele);

/*
 The shift() function lets you remove an item from the start
 of an array. 
 
 The the unshift() function adds one or more items to the
 start of an array. 

*/

//---------------------------------------------------------------

/* Push Pop is faster than shift unshift */