// How to iterate in Objects
const person = {
    name : "Yatin",
    age : 23,
    "person hobbie" : ["chess","games","sketches"]
}
//-------------------------------------------------------------
// Two Ways To Iterate Through Objects ::

// ###  1. for in loop
// ###  2. Objects.keys

// // Not able to fetch with Dot Notation
// for(let key in person){
//     console.log(person.key);
// }

//-------------------------------------------------------------

// // With help of Bracket Notation
// for(let key in person){
//     console.log(person[key]);
// }

// With help of Bracket Notation key : value pairs

for(let key in person){
    console.log(key," : " ,person[key]);
}

for(let key in person){
    console.log(`${key} : ${person[key]}`);
}
//-------------------------------------------------------------


// Objects.keys(person);

console.log(Object.keys(person));
// Gives Array of Keys
console.log(Object.values(person));
// Gives Array of Values

//-------------------------------------------------------------

console.log(typeof Object.values(person));

// Checking that the Object.Keys and Object.values 
// do they return arrays as values
const val = Array.isArray( Object.values(person));
console.log(val);

//-------------------------------------------------------------

for(let key of Object.keys(person)){
    console.log(key);
}


for(let value of Object.values(person)){
    console.log(value);
}