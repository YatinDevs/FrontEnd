'use strict'


/*

    What is window object in JavaScript?
The Window object represents the window in the browser. 
The window object is automatically created from the browser. 
All browsers support the Window object. Global variables are the properties
 of the Window objects, and global functions are the methods of the Window object.

What is window and this in JavaScript?
It gives access to the browser's methods and attributes as the global object in 
the browser environment. The window object is the global object in the web browser 
environment. It represents the current window or frames that the JavaScript code is 
running in. A browser window is represented by the window object.



*/

// console.log(this);
// console.log(window);

function myfunc(){
    console.log("hello world ");
}
myfunc();
window.myfunc();



function myfunc(){
    console.log(this);
}
myfunc();
window.myfunc();

