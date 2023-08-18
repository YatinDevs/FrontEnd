// Object is reference Types
// Arrays are Good but Not Sufficient
// For Real World Data
// Object Stores Key Value Pairs
// Objects Dont Have Index

// How to Create Objects

const person={
    "name":"Yatin",
    "age":22,
    "hobbies":["xyz","asaf","daad"]

}
console.log(person);

// how to Access data from 
/*
DOt Notation
console.log(person.name);
console.log(person.age);
console.log(person.hobbies);
*/
// Bracket notation
console.log(person["name"]);
// how to add new Key Value Pair in Object

//person.gender="male"; //  dot notation
person["gender"]="male"; // bracket notation
console.log(person);

person["email id"]="c.yatin282@gmail.com";
console.log(person);

// Dot Notation vs Bracket Notation

//person["email id"]="c.yatin282@gmail.com"; // why we use Bracket
//email id="c.atgag@gmail.com"; // not possible in Dot notation
//console.log(person);

// How to iterate An Object

// 1. for in loop
// 2. Object.keys
/*
for(let key in person){
    console.log(`${key}:${person[key]}`);
}
*/

console.log(Object.keys(person));
// computed properties
const key1="objkey1";
const key2="objkey2";
const value1="myvalue1";
const value2="myvalue2";

const obj ={
    key1 : value1,
    key2 : value2

}
console.log(obj);


const obj1 ={
    [key1] : value1,
    [key2] : value2

}
console.log(obj1);

const obj2={}
obj2[key1]=value1;
obj2[key2]=value2;
console.log(obj2);
