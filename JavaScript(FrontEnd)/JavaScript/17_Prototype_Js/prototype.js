// #########################################################  What  is Prototype  ? ################################## //

/*

function printfunction(){
   console.log("hello world");
}

printfunction();

// JavaScript  function  ==== > Function + Object

console.log(printfunction.name);

// In JS function can be treated as object

// You can add your own properties
printfunction.myownProperty="Unique_Value";
console.log(printfunction.myownProperty);

// name Property-----------------> tells function Name:

/// Function provides more useful properties.

// When we create function we can create empty object.

printfunction.prototype; //  {} 
// we can add key value pair in it
// we get empty object  through prototype property.

console.log(printfunction.prototype);

//##########  Only Functions provide prototype property: ############

console.log(printfunction.prototype); // shows the empty object created



if(printfunction.prototype){
    console.log("prototype is present .");

}else{
    console.log("prototype is not present .");

}
// output : "prototype is present .";

//----------------------------------------------------------------------

const hello = {
    name : "Yatin",
    age:22
}

console.log(hello.prototype);// Undefined


if(hello.prototype){
    console.log("prototype is present .");

}else{
    console.log("prototype is not present .");

}
// output : "prototype is not present .";

*/

//_-----------------------------------------------------------------------------------


function hello(){
    console.log("hello world");
}


hello.prototype.abcproperty = "abc";
hello.prototype.xyzproperty = "xyz";
hello.prototype.sing = ()=>{
    console.log("lalalala");
}
hello.prototype.sing();
console.log(hello.prototype.xyzproperty);
console.log(hello.prototype.abcproperty);
/*
   n JavaScript, every function and object has a property named prototype by 
   default. For example, function Person () { this.name = 'John', this. age = 23
 } const person = new Person(); // checking the prototype value console.



*/

/*

  All JavaScript objects inherit properties and methods from a prototype:



*/
/*
  JavaScript is a prototype based language, so, whenever we create a function 
  using JavaScript, JavaScript engine adds a prototype property inside a function,
   Prototype property is basically an object (also known as Prototype object), 
   where we can attach methods and properties in a prototype object, which 
   enables all the other objects to inherit these methods and properties.
  

   In above image, you can see Person has a prototype property and that prototype
  property has a constructor object which again points to the Person constructor
    function.

     We can understand this by an Image:

*/

/*https://www.geeksforgeeks.org/prototype-in-javascript/ */