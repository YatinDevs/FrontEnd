// Execution Context

var firstName = "Akshay";
var lastName = "Khurana";
let hometown = "Meerut";
const age = 28;

printMyDetails();

function printMyDetails() {
  var hometown = "Pune";
  console.log(`My name is ${firstName} ${lastName}. I am from ${hometown}.`);
  printMyAge();
  console.log("End of printMyDetails()");
}

function printMyAge() {
  var myName = "Harshit";
  console.log(`I'm ${age} years old.`);
  console.log("End of printMyAge()");
}

console.log("Thanks for knowing about me!");

/*

Output

My name is Akshay Khurana. I am from Pune.
I'm 28 years old.
Thanks for knowing about me!

*/

// How the internals will work here?
