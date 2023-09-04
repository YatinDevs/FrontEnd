// Are let and const are Hoisted??



// Lexical Scope Language ---> JavaScript .
/*
   Notes : 
   Scope Chain is used to resolve the value of variable names in Js.
   Scope Chain in Js is Lexically Defined, 
   which means that we can  see what the scope chain will be by looking at the code.

   At the top of scope chain we have Global Scope,which is window Object{}
   in case of Browser


   Lexical Scoping : A function that is Lexically within another function gets 
   access to the scope of the outer function
   (Inner function can get Access to their Parent function variables But the vice 
    versa is not true.)
*/

/*
    Execution Stack also Known as Calling Stack is a Stack with a LIFO structure,
    which is used to store all the Execution Context created during Code
    EXecution.

*/
// Global Scope (Outer Scope)

// console.log(firstName);
let firstName = "Yatin"
console.log(firstName);


// Code Flow : Analysing Code 

// 1 Compilation Phase 

// In Global Scope we Have:
/*
 
    1. let firstName 

    we Have following Things JS gets knowledge about it
*/
// a) Error Syntax Checking by tokenizing / 
// b) Appropriate Scope for variable decided with lexically scoping 
//    and looking at the code.

/*
   ################  We Have Stack with GEC #####################

    Global Execution Context (by default added to Stack).
    Even before code is Executed it is created with certain things are provided:

    So Inside GlobalExecution Context :
                                                   (Before Code Execution)
                                                    In Global Memory :
                                                    (Even Before GEC created)
                                                    Window Object (present )

                                                    (after GEC value is set
                                                        this binded with window
                                                        object here.)
                                                    this : window{}
                                                     
                                                    firstName : uninitialized
                                                (Created in memory 
                                                but uninitialized -> cannot be used
                                                until it is Initialized 
                                                (throws Uncaught Reference Error:))
                                                
                                                // Hoisting is done but is uninitialized
                                                // useless until initialization
                                                    

  2//  Code Execution Phase :                                   console:


1.console.log(firstName);                             (we have it in memory)
                                                       (Created in memory 
                                                but uninitialized -> cannot be used
                                                until it is Initialized 
                                                (throws Uncaught Reference Error:))
                                                
                                                // Hoisting is done but is uninitialized
                                                // useless until initialization
     // InCase 1st line didnt exist.                                               

2.let firstName = "Yatin"                               initialized in memory
3.console.log(firstName);                                Yatin printed 
                     

                                                   (After Code Execution)
                                                    In Global Memory :
                                                    (Even Before GEC created)
                                                    Window Object (present )

                                                    (after GEC value is set
                                                        this binded with window
                                                        object here.)
                                                    this : window{}
 
                                                   
                                                    2. firstName : Yatin


  #######  Global Execution Context is Popped after completion of Code Execution From Stack.##########

                  
  // let and const hoisting occurs

*/
/**
 
 let_const_hoisted_.js:30 Uncaught ReferenceError: Cannot access 'firstName' before initialization


let_const_hoisted_.js:30 Uncaught ReferenceError: firstName is not defined


TDZ ---> Temporal Dead Zone : 
A temporal dead zone (TDZ) is the block where a variable is inaccessible until the moment the 
computer initializes it with a value. A block can be defined as a pair of braces ({...}) 
used to accumulate multiple statements. Initialization occurs when one assigns an initial 
value to a variable.


console.log(firstName);                     ..,, value uninitialized

  Error :
 let_const_hoisted_.js:30 Uncaught ReferenceError: Cannot access 'firstName' before initialization


let firstName = "Yatin"                     ... value initialized to Yatin
console.log(firstName);

What is the temporal dead zone for VAR and let?
Temporal dead zone (TDZ)

A variable declared with let , const , or class is said to be in a "temporal dead zone" (TDZ)
 from the start of the block until code execution reaches the place where the variable is 
 declared and initialized.





 */





// In Case of let
// let first_name; // Undefined
// console.log(first_name);

// In case of Const :
// const first_name; // Uncaught SyntaxError: Missing initializer in const declaration
// console.log(first_name);



console.log(typeof first_name); //  Uncaught ReferenceError: Cannot access 'first_name' before initializatio
let first_name= "Yatin";
