// Understanding Callback Function :

// Call backs In General:

/*
function myfunc(callback){
    console.log("function is doing  task 1");
    callback();
}

function myfunc2(){
    console.log("function is doing  task 2");

}

myfunc(myfunc2);
// myfunc2();
*/
/*
     What is callback function in JavaScript?
What is a Callback Function in JavaScript? 
A JavaScript callback is a function which is to be executed after another 
function has finished execution.
 A more formal definition would be - 
Any function that is passed as an argument to another function so that it can 
be executed in that other function is called as a callback function.


*/

/*
function myfunc(callback){
    console.log("function is doing  task 1");
    callback();
}

*/

/*
What is anonymous function in JavaScript?
It is a function that does not have any name associated with it. 
Normally we use the function keyword before the function name to define a
 function in JavaScript, however, in anonymous functions in JavaScript,
  we use only the function keyword without the function name. */

/*
// anonymous function as argument for call back
myfunc(function(){
    console.log("function is doing  task 2");
});


myfunc(()=>{
    console.log("function is doing  task 3");
});

*/

/*
function getTwonumbersandAdd(num1,num2,callback){
    console.log(num1,num2);
    callback(num1,num2);
}

function addTwonumbers(number1,number2){
    console.log(number1 + number2);
}

getTwonumbersandAdd(4,5,addTwonumbers);
*/


/*

function getTwonumbersandAdd(num1,num2,callback){
    if(typeof num1 ==="number" && typeof num2 ==="number"){
       callback(num1,num2);
    }else{
        alert("Invalid Input!");
    }
}

function addTwonumbers(number1,number2){
    console.log(number1 + number2);
}

// getTwonumbersandAdd(4,"5",addTwonumbers);

*/
//------------------------------------------------------------------------------
/*
function getTwonumbersandAdd(num1,num2,callback){
    if(typeof num1 ==="number" && typeof num2 ==="number"){
       callback(num1,num2);
    }else{
        alert("Invalid Input!");
    }
}
getTwonumbersandAdd(4,5,(number1,number2)=>{
    console.log(number1 + number2);

});

*/
//------------------------------------------------------------------------------

/*
function getTwonumbersandAdd(num1,num2,onSuccess,onFailure){
    if(typeof num1 ==="number" && typeof num2 ==="number"){
        onSuccess(num1,num2);
    }else{
        onFailure();
    }
}


getTwonumbersandAdd(4,"5",(number1,number2)=>{
    console.log(number1 + number2);
},()=>{
    alert("Invalid Output!!");
    console.log("Enter Valid Number");
}
);

*/
//------------------------------------------------------------------------------
