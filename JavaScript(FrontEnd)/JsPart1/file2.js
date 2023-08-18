// Undefined   -----> let FirstName;
// Null        ------> let myVar=null;  --> type of shows object its bug,error
// String     
// number
// boolean
//BigInt   ---------> let myNumber =BigInt(23); or 
//let myNumber = 1234n;


// booleans and Comparision Operator
/*
let num1 = 5;
let num2 = 7;
let result= (num1>num2)?"Yes":"No";
console.log(result);
*/
// == vs ===
let num1 = 7;
let num2 ="7";
let result=(num1==num2)?"Yes":"No"; // == ---> checks values
// === ---> checks values as well as datatypes.
console.log(result);
// !=  (checks values) vs !== ( checks values as well as datatypes.)

// truthy and falsy values

// falsy value eaxmples
// false
// ""
// null
// undefined
// 0

// truthy values
// all are truthy
// "abc"
// 1, -1

// if else condition

// ternary operator / conditional operator

// AND OR operator --> &&  ||

// Nested if Else 
/*
let winningNumber=19;
let userGuess = +prompt("Guess A Number?");
// "12"
console.log(typeof userGuess,userGuess);
if(userGuess===winningNumber){
    console.log("Winner");
}else{
    console.log("Loser");
    if(userGuess>winningNumber){
        console.log("Too high!!");
    }else{
        console.log("Too low!!");
    }
}
*/

//if
//else if
//else if
// else

// switch Statement

// while loop
// for loop

// break keyword;
// continue keyword --> skips further code and iterates to next 
// do while