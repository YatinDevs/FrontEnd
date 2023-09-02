
// Call , Apply and Bind

/*

Call() Method: The call() method calls the function directly and sets this to the 
first argument passed to the call method and if any other sequences of arguments 
preceding the first argument are passed to the call method then they are passed as 
an argument to the function.

Syntax:

call(objectInstance)
call(objectInstance, arg1,  argN)
  
Example :

let nameObj = {
    name: "Tony"
}
  
let PrintName = {
    name: "steve",
    sayHi: function (age) {
        console.log(this.name + " age is " + age);
    }
}
  
PrintName.sayHi.call(nameObj, 42);

Output : Tony age is 42.


*/

/*
function hello(){
    console.log("hello World");
}

hello.call();

const user1 = {
    first_name : "Yatin",
    age : 23,
    about : function(hobby,favMusician){
        console.log(this.first_name,this.age,hobby,favMusician);
    }
}

const user2 = {
    first_name : "Siddesh",
    age : 26
}

user1.about();

user1.about.call(user2); 
// call we add what will this represent 
// Which object reference will the this keyword of about function take
// Here user2 is passed

user1.about.call(); // will be undefined undefined
// we need to pass what should be object reference


// passing argument from call method
user1.about.call(user1,"guitar","moazrt"); 

*/
///-------------------------------------------------------------------------------------

// So instead of Above pattern we can do is

function about (hobby,favMusician){
    console.log(this.first_name,this.age,hobby,favMusician);
}



const user3 = {
    first_name : "Yatin",
    age : 23,
  
}

const user4 = {
    first_name : "Siddesh",
    age : 26
}

about.call(user3);
// call(objectInstance)
// So with respect to user3 object here 
// the this keyword of about function will be handled
// hobby and favmusician is undefined here as no arguments were passed in call method

about.call(user4,"guitar","bach");

// call(objectInstance,arg1,arg2)
// So with respect to user4 object here 
// the this keyword of about function will be handled
// hobby and favmusician is guitar and bach respectively here as
// two args were passed
