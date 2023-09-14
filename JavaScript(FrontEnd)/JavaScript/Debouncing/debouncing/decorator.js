/*
// Decorator functions:
// Debounce is an Decorator function.


// Decorator function 
// Takes function as an input -----> Decorator function ---> returns decorated function()

// Decorator function created
function decorator(func){
    return function(){
        console.log(`you are calling decorated function : ${func.name}`);
        func();
    }
}

// Normal function
function hello(){
    console.log("hello world!");
}


// Normal function
function hi(){
    console.log("hi there!");
}

//calling decorator function
// passing hello function as argument
const decoratedhello = decorator(hello);
const decoratedhi = decorator(hi);
// console.log(decoratedhello);
decoratedhello();
decoratedhi();
*/
// ============================================================================================
function decorator(func){
    return function(...args){
        console.log(`you are calling decorated function : ${func.name}`);
        func.call(this,...args);
    }
}
function hi(name){
    console.log("hi there!",name);
}

function hello(){
    console.log("hello world!");
}

const decoratedhi = decorator(hi);
decoratedhi("Yatin");
