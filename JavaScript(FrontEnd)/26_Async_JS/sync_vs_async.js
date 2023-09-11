// Synchronous Programming vs Asynchronous Programming

// Synchronous Programming

// JavaScript is Synchronous Programming Language and Single Threaded.

/*
console.log("script Start");

for(let i = 1; i< 10000; i++){
    console.log("inside for Loop");
}

console.log("script end");
*/

/*
   What is synchronous in programming?
What Does Synchronous Mean In Programming? Synchronicity in programming happens 
when the execution of operations is done sequentially. An operation will only be 
executed after the previous one is done. This means that a potentially complex task
 may take a while before all its steps are executed and completed.


*/


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

console.log("start Script");

setTimeout(()=>{
    console.log("inside Timeout Function");
},3000);

console.log("Script Ends");