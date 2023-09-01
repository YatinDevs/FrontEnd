// ################ Introduction to Objects .#############


// Arrays are Good but not sufficient for real world data.


// 1.Object is Reference type
// Stored in Similar to Array in heap and stack pointer 
// pointing ,All Reference type act in same way.

// 2.Objects are Stored in key value pairs
// 3.object dont have index.

// -----------------------------------------------------------

// How to create Objects

// Object created for person
const person = {
    name : "Yatin",
    age : 23,
    hobbie : ["chess","games","sketches"]
}

console.log(typeof person);
// -----------------------------------------------------------

// how to access data from objects (Dot Notation)
console.log(person.name);
console.log(person.age);
console.log(person);
console.log(person.hobbie);

// Accessing with help of key other way (Bracket Notation)
console.log(person["name"]);
console.log(person["age"]);
console.log(person["hobbie"]);
// -----------------------------------------------------------

// how to add key value pair to objects (Dot Notation)
person.gender = "male";
console.log(person);

// adding with help of (bracket Notation)

person["city"]="kalyan";
console.log(person);

// -----------------------------------------------------------


