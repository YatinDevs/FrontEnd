/*
function myFunction(){
    function innerFunction(){
        console.log("inside Inner Function");
    }
    return innerFunction;


}
const ans =myFunction();
//console.log(ans);
ans();
*/
/*
function print(firstName,lastName){
    function fullName(){
        console.log(firstName,lastName);
    }
    return fullName;


}
const ans =print("Yatin","Chaudhari");
//console.log(ans);
ans();

*/
/*
function hello(x){ 
    // argu = [x="args"]
    // a :uniti ---> varA after
    // b :uninitialized --> varB after
    // returned funn & all the variables surrounding
     const a= "varA";
    const b= "varB";
    return function(){
        console.log(a,b,x);      // hello pointing funct
    } 
}
const ans = hello("arg");        //  ans : unintialize --> function and all returned variables
ans();  // will call ans which is now initialized
// with function and all variables
// with new Execution Context

// Output 
// varA varB arg
*/
/*
function myFunction(power){
    return function(number){
        return number**power;
    }
}

// const cube = myFunction (3);
const square = myFunction (2);
const ans=square(3);
console.log(ans);
*/
/*
// create func
function func(){
    let counter=0;
   return function(){
     if(counter<1){
    console.log("Hi, You called Function!");
    counter++;
    }else{
        console.log("Function Already Called Once");
    }
   }
}
const myFunc = func();
myFunc();
myFunc();
myFunc();
myFunc();
*/