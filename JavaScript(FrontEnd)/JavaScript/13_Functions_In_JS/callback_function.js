// ########### Call back Function  #############

/*
function myfunc(a){
    console.log(a);
    console.log('hello world');
}
myfunc();
myfunc("abc");
myfunc([1,2,3]);
myfunc({name:"abc",age:22});
*/
//--------------------------------------------------------

/*

function myfunc2(){
    console.log("inside my function 2.");
}

function myfunc(callback){
    // here we have passed function
    // console.log(a);
    // calling the passing parameter function;
    callback();
}
// Passing function as argument inside function
myfunc(myfunc2);

*/
// Above is Example of Call back Function

/*
               ########### Call Back Function ###########
A JavaScript callback is a function which is to be executed 
after another function has finished execution.
 A more formal definition would be -
 Any function that is passed as an argument to another 
 function so that it can be executed in that other function
 is called as a callback function.

*/

//-------------------------------------------------------------------



function myfunc2(name){
    
    console.log("inside my function 2.");
    console.log(`my name is ${name}`);

}

function myfunc(callback){
    // In Call back Function
    // Code execution is done first
    console.log("hello there code is been executed")

    // After execution of above function
    // call back function is executed
    // which is passed as an argument
    callback("Yatin");
}
// Passing function as argument inside function
myfunc(myfunc2);
