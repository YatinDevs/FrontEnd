// callback functions
 
function myFunction(callback){
    console.log("hello Main Function");
    callback("Yatin");
}

function mynewfunction(name){
    console.log("inside 2nd  fun");
    console.log(`your name is ${name}`);
}

myFunction(mynewfunction);

// A callback is a function passed as an argument to another function.

