// Block Scope Vs Function Scope


/*

// let and const are block scoped
// var is function scoped

{
    // here let is block scoped
    let firstChar = "afafafafa";
    // similar in case of const
    const  name_var = "adadad";
   
}

// In Case of Let : variable
// console.log(firstChar);
// uncaught reference error :firstchar is not defined
// cannot access firstChar as it is blockscoped
// and declared as let
// Similarly:
// In Case of const : variable
console.log(name_var);
// uncaught reference error :firstchar is not defined
// cannot access firstChar as it is block scoped
// and declared as const

*/

// ------------------------------------------------------------

/*

{   
    // Blocked Scoped
    const firstname = "yatin";
    console.log(firstname);
}
// Outer Global body scope
const firstname = "siddesh";
console.log(firstname);

*/

//-------------------------------------------------------------

/*
// In case of var

{
    var firstname = "Yatin";
}

{
    console.log(firstname); 
}
console.log(firstname); 
// can be accessed 
// for var whole global scope is function
// var is function scoped
*/
//--------------------------------------------------------------------
// let firstname="abcd"; // case 2:
//can be accessed through lexical scope by
function myApp(){
    if(true){
        let firstname = "yatin"; // case 1: block scoped
        console.log(firstname); // accessed 
    }
    console.log(firstname);
    // case 1:
    // cannot access yatin data as it is block scope
    // and let and const are blocked scope
    // if it was var we would be able to do so.
    // Error as let is function scoped

    // case 2:
    // this access variable by lexical scope 
    // from variable declared in global scope
}

myApp();