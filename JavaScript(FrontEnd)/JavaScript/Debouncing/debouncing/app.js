
// const myInput = document.getElementById("input-event");


// Events :
// 1. keyup
// 2. input
// 3. change



// // 1. keyup

// myInput.addEventListener("keyup",()=>{
//     console.log("function called");
//     console.log("function called",myInput.value);

// })


// // 2. input --> recommended

// myInput.addEventListener("input",()=>{
//     console.log("function called");
//     console.log("function called",myInput.value);

// })


// // 3. change

// myInput.addEventListener("change",()=>{
//     console.log("function called change");
//     console.log(myInput.value);
// })

// keypress --> little bug ---> depending on browser 
// keydown
// keyup

//------------------------------------------------------------------------------------------------
/*

const myInput = document.getElementById("input-event");


myInput.addEventListener("input",(e)=>{

        // console.log(myInput.value);
        // console.log(myInput);
        // console.dir(myInput);

        console.log(e.target.value);
    
    })



function findSuggestion(e){
    console.log("suggestions for " ,e.target.value);
}

myInput.addEventListener("input",findSuggestion);

*/
//=========================================================================================

/*
// Debounce function --> as input takes :
// 1. function () --> findSuggestion()
// 2. delay --> 1000ms

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
/*

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
*/
/*
what is a decorator function?

By definition, a decorator is a function that takes another function and 
extends the behavior of the latter function without explicitly modifying it.
 This sounds confusing, but it's really not, especially after you've seen a 
 few examples of how decorators work.  


*/

//=======================================================================================================================

function debounce(func,delay){

    return function(...args){
        let timeoutID;
        if(timeoutID){
            clearTimeout(timeoutID);
        }
        timeoutID = setTimeout(()=>{
            func.call(this,...args); 
        },delay);     
    }
}

const myInput = document.getElementById("input-event");


function findSuggestion(e){
    console.log("suggestions for " ,e.target.value);
}

const decoratedFunc = debounce(findSuggestion,300);

myInput.addEventListener("input",decoratedFunc);
