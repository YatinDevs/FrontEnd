// ############## Parameters Destructuring : ###########

// So where we use Parameters Destructing More often :

// 1. with Object
// 2. In react


// How to Destructure Parameter passed to function
/*
const person = {
    firstname :"Yatin",
    gender : "male",
}

function printpersonDetails(obj){

    console.log(obj.firstname); // Yatin
    console.log(obj.gender);  // male
    console.log(obj.age);  // undefined
}

printpersonDetails(person);

*/

/*

const person = {
    firstname :"Yatin",
    gender : "male",
    age : 500,
}
function printpersonDetails({firstname,gender,age}){

    console.log(firstname); // Yatin
    console.log(gender);  // male
    console.log(age);  // undefined
}
printpersonDetails(person);

*/


/// Nothing was trying some thing
// const person = {
//     firstname :"Yatin",
//     gender : "male",
//     age : 500,
// }
// function printpersonDetails(person){
  
//     for(let data of person){

//         console.log(data); // Yatin
//     }
// }
// printpersonDetails(...person);

/*

What is parameter destructuring in JavaScript?
Destructuring in JavaScript is used to unpack or segregate 
values from arrays or properties from object literals into 
distinct variables, thus it allows us to access only the 
values required

*/