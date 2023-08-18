// Param Destructuring

// Object
// react
 // Object person
const person ={
    first_Name: "Yatin",// parameters of Object
    gender: "male",

}

/*
function printdetails(obj){
    console.log(obj.first_Name);
    console.log(obj.gender);
}

*/

function printdetails({first_Name,gender}){
    console.log(first_Name); // first name
    console.log(gender);
}

printdetails(person);