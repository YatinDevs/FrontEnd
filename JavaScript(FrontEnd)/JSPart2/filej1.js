// 1 Compilation
// 2 Code Execution
// Why Compilation
// How JavaScript Code Executes

// What is Global Execution Context?
// What is Local Execution Context?

// Closures
/*
console.log(this);
console.log(window);
console.log(firstName);
var firstName = "Yatin";
console.log(firstName);
*/


console.log(this);
console.log(window);
console.log(myFunction);
console.log(fullName);

function myFunction(){
    console,log("this is my Function");
}

var firstName = "Yatin";
var lastName ="chaudhari";
var fullName = firstName + " " + lastName;
console.log(fullName);