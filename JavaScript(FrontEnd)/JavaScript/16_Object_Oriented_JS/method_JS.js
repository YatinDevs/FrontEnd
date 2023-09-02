// #############   Object Oriented JavaScript / ProtoTypal Inheritance In JS ############

// Methods 


/*
   What is methods in JavaScript with example?

 A Javascript method is an action done on an object, and it is a property that holds 
 a function definition, for example, suppose you have a function that has firstName,
 lastName, regno, and a method with the name of fullName that returns the first name 
 and the last name of a person i-e the full name of a person.

*/
// Functions inside Object :

/*
   JavaScript Methods: A JavaScript method is a property of an object that contains
   a function definition. Methods are functions stored as object properties.
   Object method can be accessed with the following syntax:

Syntax:

object = {
    methodName: function() {
        // Content
    }
};

object.methodName()

*/
/*
Function and Method :
A function doesn't need any object and is independent, 
while the method is a function, which is linked with any object. 
We can directly call the function with its name, while the method is called by 
the object's name. Function is used to pass or return the data, while the method 
operates the data in a class.


*/

// Person Object :
// this Keyword :
/*
   "this” keyword refers to an object that is executing the current piece of code. 
   It references the object that is executing the current function. 
   If the function being referenced is a regular function, “this” references the 
   global object.

*/

/*
const person = {
    first_name : "Yatin",
    age : 22 ,
    gender: 'male',

    about : function(){
        console.log(`Person name is ${this.first_name} and age is ${this.age} `);
    }
}

person.about();

*/


//-------------------------------------------------------------------------------------
function personInfo(){
    console.log(`Person name is ${this.first_name} and age is ${this.age} `);
}


const person1 = {
    first_name : "Yatin",
    age : 22 ,
    gender: 'male',

    about : personInfo
}

const person2 = {
    first_name : "Siddhi",
    age : 24 ,
    gender: 'female',

    about : personInfo
}
const person3 = {
    first_name : "Ankit",
    age : 24 ,
    gender: 'male',

    about : personInfo
}

personInfo(); // undefined

person1.about();
person2.about();
person3.about();