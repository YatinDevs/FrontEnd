
// setTimeout function

/*
console.log("script Start");

function hello(){
    console.log("hello world ! ");

}
// setTimeout function takes(function call,time(in milisecond));
setTimeout(hello,5000);

console.log("script End");

*/

// Other Syntax:

/*
console.log("start Script");

setTimeout(()=>{
    console.log("inside Timeout Function");
},3000);

console.log("Script Ends");

*/
/*
The setTimeout() method calls a function after a number of milliseconds.
1 second = 1000 milliseconds.

The setTimeout() is executed only once.
If you need repeated executions, use setInterval() instead.


What is setTimeout?
setTimeout() global function. The global setTimeout() method sets a timer
which executes a function or specified piece of code once the timer expires


How does setTimeout () work?
The setTimeout( ) method defers the execution of the JavaScript statements
 in the string code for delay milliseconds. Once the specified number of 
 milliseconds has elapsed, the statements in code are executed normally. 
 Note that they are executed only once.


Use the clearTimeout() method to prevent the function from starting.



*/

/*
  What is the event loop?
What is an event loop in JavaScript ? - GeeksforGeeks
Order at which functions get executed i.e get popped out of the stack 
after a function's purpose gets over as shown below: 

    Event loop: 
An event loop is something that pulls stuff out of the queue and places
 it onto the function execution stack whenever the function stack becomes 
 empty.

*/ 

/*
console.log("start Script");

setTimeout(()=>{
    console.log("inside Timeout Function");
},0);


for(let i = 1; i< 10000; i++){
    console.log("....");
}

console.log("Script Ends");
*/


// Use the clearTimeout() method to prevent the function from starting.

console.log("start Script");

const id = setTimeout(()=>{
    console.log("inside Timeout Function");
},0);


for(let i = 1; i< 10000; i++){
    console.log("....");
}

console.log("settime out id is ",id);
console.log("clearing time out ");
clearTimeout(id);
console.log("Script Ends");
