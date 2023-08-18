
function hello(){
    console.log("hello world");
}


// javascript function ==> function +object
// console.log(hello.name);
// you can add your own properties
/*
hello.myproperty="very unique value";
console.log(hello.myproperty);
*/
// name property -----> tells function name;

// function provdies more usefull properties.

// function gives us free space(or we can say empty objects to fill)

// const hello = ["value1"];


console.log(hello.prototype); // consider prototype as empty {}

// Only functions Provides Prototype Properties


if(hello.prototype){
    console.log("Yes");
}
else{
    console.log("No");
}

hello.prototype.abc = "abcde";
hello.prototype.xyz = "xsrs";
hello.prototype.sang = function(){return "songs"}; 

console.log(hello.prototype.sang()); // consider prototype as empty {}


// proto ---> creates chain ----> was reference different from prototype

// function ke sath we get free space or free object space 
// we can function related key value pairs through it