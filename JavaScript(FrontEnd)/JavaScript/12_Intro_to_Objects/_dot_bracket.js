// Difference Between Dot and Bracket Notation 

/*
// 1. Difference Case 1 
// (Fetching/Accessing data Through Certain type of Key)


// Here person hobbie key has space in between 
// we cannot store the key without adding string literals
const person = {
    name : "Yatin",
    age : 23,
    "person hobbie" : ["chess","games","sketches"]
}

// In Case of Accessing this type of Key here 
// we need Bracket Notation and not dot 
// as Dot Notation will give error due to space in between

// console.log(person.person hobbie); // invalid error

// For Option is Bracket notation

console.log(person["person hobbie"]);


*/

// 2. Difference Case 2 
// (Adding data )

// created one variable

const key = "email";

const person = {
    name : "Yatin",
    age : 23,
    "person hobbie" : ["chess","games","sketches"]
}

// Dot Notation (adding data with key variable)

// person.key = "abcd2323@gmail.com";
//here while adding data with dot notation
// the key variable it self is considered key here and 
// not the data inside the key 

// Bracket Notation (adding data with key variable)

// person["key"] = "abcd2323@gmail.com";
person[key] = "abcd2323@gmail.com";
console.log(person);

// here when we give key variable it fetches its value and 
// value is assigned as key and to it email data in person object.