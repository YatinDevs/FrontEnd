
/*
                 ######## Bind Method ############

Before implementing bind(), apply(), and call() polyfills, let us know what is a 
polyfill in JavaScript:

Polyfill: Polyfills are the implementation of the features that are given by our 
browsers, but may not be present in the previous versions of it.

1. Bind() Method: The bind() method creates a new function and when that new function
 is called it set this keyword to the first argument which is passed to the bind 
 method, and if any other sequences of arguments preceding the first argument are 
 passed to the bind method then they are passed as an argument to the new function 
 when the new function is called.

 bind(thisArg)
bind(thisArg, arg1, arg2)

let nameObj = {
	name: "Tony"
}

let PrintName = {
	name: "steve",
	sayHi: function () {

		// Here "this" points to nameObj
		console.log(this.name);
	}
}

let HiFun = PrintName.sayHi.bind(nameObj);
HiFun();


*/



function about (hobby,favMusician){
    console.log(this.first_name,this.age,hobby,favMusician);
}



const user1 = {
    first_name : "Yatin",
    age : 23,
  
}

const user2 = {
    first_name : "Siddesh",
    age : 26
}

const user3 = {
    first_name : "Shivani",
    age : 24
}

about.bind(user1,"guitar",'bach'); 
// Doesnt return any output 
// It Returns a Function as output

const func = about.bind(user1,"guitar",'bach'); 
console.log(func);
func();

